import express from 'express'
import productController from '../../controllers/productController.js'
import { asyncHandler } from '../../helpers/asyncHandler.js'
import { authentication } from '../../auth/authUtils.js'
const router = express.Router()


router.use(authentication)

router.get('', asyncHandler(productController.findAllProducts))
router.get('/:id', asyncHandler(productController.findOneProduct))
router.post('', asyncHandler(productController.createProduct))
router.patch('/:id', asyncHandler(productController.updateProduct))
router.delete('/:id', asyncHandler(productController.deleteProduct))
export default router