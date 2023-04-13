import express from 'express'
import access from './access/index.js'
const router = express.Router()



router.use('/api/v1', access)

export default router