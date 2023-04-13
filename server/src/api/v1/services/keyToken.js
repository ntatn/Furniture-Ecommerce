import keyToken from "../models/keyToken.js"

class keyTokenService {
    static createKeyToken = async ({ userId, publicKey}) => {
        try {
            const publicKeyString = publicKey.toString()
            const tokens = await keyToken.create({
                user: userId,
                publicKey: publicKeyString

            })

            return tokens ? tokens.publicKey : null
        }catch(err) {
            return err
        }
    }
}

export default keyTokenService