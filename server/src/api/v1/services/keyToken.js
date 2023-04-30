import keyToken from "../models/keyToken.js"
import { Types } from "mongoose"
class keyTokenService {
    static createKeyToken = async ({ userId, publicKey, privateKey, refreshToken}) => {
        try {
            const filter = {userId: userId}, update = {
                publicKey, privateKey, refreshToken, refreshTokensUsed: []
            }, options = {upsert: true, new: true}
            const tokens = await keyToken.findOneAndUpdate(filter, update, options)
            return tokens ? tokens.publicKey : null
        }catch(err) {
            return err
        }
    }

    static findByUserId = async (userId) =>{
        return await keyToken.findOne({ userId: Types.ObjectId(userId)}).lean()
    }

    static removeKeyById = async (id) =>{
        return await keyToken.deleteOne(id)
    }

    static findByRefreshTokenUsed = async (refreshToken) =>{
        return await keyToken.findOne({ refreshTokensUsed: refreshToken })
    }

    static findByRefreshToken = async (refreshToken) =>{
        return await keyToken.findOne({ refreshToken }).lean()
    }

    static deleteKeyById = async (userId) =>{
        return await keyToken.deleteOne({userId: Types.ObjectId(userId)})
    }
}

export default keyTokenService