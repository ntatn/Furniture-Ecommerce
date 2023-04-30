import JWT from 'jsonwebtoken'
import { asyncHandler } from '../helpers/asyncHandler.js'
import { AuthFailureError, NotFoundError } from '../middlewares/error.response.js'
import keyTokenService  from '../services/keyToken.js'
import { verify } from 'crypto'
const HEADER = {
    CLIENT_ID: 'x-client-id',
    AUTHORIZATION: 'authorization'
}
const createTokenPair = async (payload, publicKey, privateKey) => {
    try {
        //Access token
        const accessToken = await JWT.sign(payload, publicKey, {
            expiresIn: 60*60*1
        })
        //Refresh token
        const refreshToken = await JWT.sign(payload, privateKey, {
            expiresIn: 60*60*24*7
        })
        JWT.verify(accessToken, publicKey, (err, decode) => {
            if(err) {
                console.error(err)
            }else{
                console.error(decode)
            }
        })
        return {accessToken, refreshToken}

    } catch (error) {
        
    }
}

const authentication = asyncHandler(async(req, res, next) => {
    /*
        1- Check userId missing?
        2- Get access token
        3- Verify token
        4- Check user in dbs
        5- Check keyStore with this userId
        6- Ok all => return next()
    */
    const userId = req.headers[HEADER.CLIENT_ID]
    if(!userId) throw new AuthFailureError('Invalid Request')

    const keyStore = await keyTokenService.findByUserId( userId )
    if(!keyStore) throw new NotFoundError('No keyStore found')

    const accessToken = req.headers[HEADER.AUTHORIZATION]
    if(!accessToken) throw new AuthFailureError('Invalid Request')

    try {
        const decodeUser = JWT.decode( accessToken, keyStore.publicKey)
        if(userId !== decodeUser.userId) throw new AuthFailureError('Invalid User ID')
        req.keyStore = keyStore
        return next()
    } catch(e) {
        console.log(e.message)
        throw e
        
    }
})

const verifyJWT = async (token, keySecret) =>{
    return await JWT.verify(token, keySecret)
}

export {createTokenPair, authentication, verifyJWT}