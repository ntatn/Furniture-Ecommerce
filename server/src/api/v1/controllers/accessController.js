import AccessService from "../services/access.js"

class AccessController {
    signUp =  async (req, res, next) => {
       try {
        
            return res.status(201).json(await AccessService.signUp(req.body))

       } catch (error) {
        next(error)
       }
    }
}

export default new AccessController