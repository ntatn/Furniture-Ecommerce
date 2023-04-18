import express from 'express'
import accessController from '../../controllers/accessController.js'
import { asyncHandler } from '../../middlewares/error.response.js'
const router = express.Router()

//signUp
router.post('/user/signup', asyncHandler(accessController.signUp))

export default router