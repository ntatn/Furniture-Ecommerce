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
                const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096,
                    publicKeyEncoding: {
                        type: 'pkcs1',
                        format: 'pem'
                    },
                    privateKeyEncoding: {
                        type: 'pkcs1',
                        format: 'pem'
                    }
                })

            

                const publicKeyString = await keyTokenService.createKeyToken({
                    userId: newUser._id,
                    publicKey
                })

                if(!publicKeyString){
                    return {
                        code: 'xxxx',
                        message: 'publicKeyString error'
                    }
                }
                const tokens = await createTokenPair({userId: newUser._id, email}, publicKeyString, privateKey)
                
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