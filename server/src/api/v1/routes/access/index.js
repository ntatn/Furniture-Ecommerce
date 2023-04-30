import express from 'express'
import accessController from '../../controllers/accessController.js'
import { asyncHandler } from '../../helpers/asyncHandler.js'
import { authentication } from '../../auth/authUtils.js'
const router = express.Router()

//signUp
router.post('/user/signup', asyncHandler(accessController.signUp))
router.post('/user/login', asyncHandler(accessController.login))
router.use(authentication)

router.post('/user/logout', asyncHandler(accessController.logout))
router.post('/user/refresh', asyncHandler(accessController.handleRefreshToken))
export default router