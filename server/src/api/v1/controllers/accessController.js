import AccessService from "../services/access.js"
import {SuccessResponse} from "../middlewares/success.response.js"
class AccessController {

    handleRefreshToken = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get token success',
            metadata: await AccessService.handleRefreshToken(req.body.refreshToken)
        }).send(res)
    }

    logout = async (req, res, next) => {
        new SuccessResponse({
            message: 'Logout successfully',
            metadata: await AccessService.logout(req.keyStore)
        }).send(res)
    }
    login = async (req, res, next) => {
        new SuccessResponse({
            metadata: await AccessService.login(req.body)
        }).send(res)
    }
    signUp =  async (req, res, next) => {
       try {
        
            return res.status(201).json(await AccessService.signUp(req.body))

       } catch (error) {
        next(error)
       }
    }
    
}

export default new AccessController