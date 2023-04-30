import user from '../models/user.js'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import keyTokenService from './keyToken.js'
import { createTokenPair } from '../auth/authUtils.js'
import { getIntoData } from '../utils/index.js'
import { OK, CREATED } from '../middlewares/success.response.js'
import { BadRequestError, ConflictRequestError, AuthFailureError } from '../middlewares/error.response.js'
import { findByEmail } from './user.service.js'
const Role = {
    CUSTOMER: '0002',
    ADMIN: '0001'
}
class AccessService {
    static logout = async (keyStore) => {
        const delKey = await keyTokenService.removeKeyById(keyStore._id)
        console.log(delKey)
        return delKey
    }
    /*
        1 - Check Email in dbs
        2 - Match password
        3 - create AccessToken and RefreshToken and save
        4 - generate
        5 - get data return login
    */ 
    static login = async ( { email, password, refreshToken = null } ) => {
        const foundUser = await findByEmail({ email })
        if(!foundUser) throw new BadRequestError('User not registered')
        
        const match = bcrypt.compare(password, foundUser.password)
        if(!match) throw new AuthFailureError('Authentication error')

        const publicKey = crypto.randomBytes(64).toString('hex')
        const privateKey = crypto.randomBytes(64).toString('hex')

        const tokens_ = await createTokenPair({userId: foundUser._id, email}, publicKey, privateKey)
        await keyTokenService.createKeyToken({
            userId: foundUser._id,
            refreshToken: tokens_.refreshToken,
            privateKey,
            publicKey
        })

        return {user: getIntoData({fileds: ['_id','roles'], object: foundUser}), token: tokens_}
    }   

    static signUp = async ({name, email, password}) => {
        try{
            // Check email exists?
            const hodelUser = await user.findOne({ email }).lean()
            if(hodelUser){
                throw new BadRequestError
            }
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = await user.create({
                name, email, password: passwordHash, roles: [Role.CUSTOMER]
            })
            if(newUser){
                const publicKey = crypto.randomBytes(64).toString('hex')
                const privateKey = crypto.randomBytes(64).toString('hex')

                console.log({publicKey, privateKey})
                
                const keyStore = await keyTokenService.createKeyToken({
                    userId: newUser._id,
                    privateKey,
                    publicKey
                })
                console.log(keyStore)
                if(!keyStore){
                    return {
                        code: 'xxxx',
                        message: 'keystore error'
                    }
                }
                const tokens = await createTokenPair({userId: newUser._id, email}, publicKey, privateKey)
                console.log(tokens);
                return  new CREATED({
                        metadata: {
                            user: getIntoData({fileds: ['_id', 'name', 'email'], object: newUser}),
                            tokens
                        }
                    })     
            }
            return {
                code: 200,
                metadata: null
            }

        }catch(err){
            return {
                message: err.message,
                status: 'error'
            }
        }
    }
}

export default  AccessService