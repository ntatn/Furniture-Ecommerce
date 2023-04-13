import user from '../models/user.js'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import keyTokenService from './keyToken.js'
import { createTokenPair } from '../auth/authUtils.js'
import { getIntoData } from '../utils/index.js'
const Role = {
    CUSTOMER: '0002',
    ADMIN: '0001'
}
class AccessService {
    static signUp = async ({name, email, password}) => {
        try{
            // Check email exists?
            const hodelUser = await user.findOne({ email }).lean()
            if(hodelUser){
                return {
                    code: 'xxxx',
                    message: 'User already exists'
                }
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
                
                return {
                    code: 201,
                    metadata: {
                        user: getIntoData({fileds: ['_id', 'name', 'email'], object: newUser}),
                        tokens
                    }
                }
               
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