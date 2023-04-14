import AccessService from "../services/access.js"
import { OK, CREATED } from "../middlewares/success.response.js"
class AccessController {
    signUp =  async (req, res, next) => {
        new  CREATED({
            message: 'Regiserted successfully',
            metadata: await AccessService.signUp(req.body)
        }).send(res)
    }
}

export default new AccessController()