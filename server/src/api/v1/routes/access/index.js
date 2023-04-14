import express from 'express'
import accessController from '../../controllers/accessController.js'

const router = express.Router()

//signUp
router.post('/user/signup', accessController.signUp)

export default router