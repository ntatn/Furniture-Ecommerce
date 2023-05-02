import express from 'express'
import access from './access/index.js'
import product from './product/index.js'
const router = express.Router()



router.use('/api/v1', access)
router.use('/api/v1/product', product)
export default router