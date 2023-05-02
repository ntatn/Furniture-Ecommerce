import ProductService from "../services/product.service.js"
import {SuccessResponse} from "../middlewares/success.response.js"
class ProductController {

    createProduct = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create new product successfully',
            metadata: await ProductService.createProduct(req.body)
        }).send(res)
    }

    findAllProducts = async (req, res, next) => {
        new SuccessResponse({
            message: 'Find All Successfully',
            metadata: await ProductService.findAllProducts(req.query)
        }).send(res)
    }

    findOneProduct = async (req, res, next) => {
        new SuccessResponse({
            message: 'Find Product Successfully',
            metadata: await ProductService.findOneProduct(req.params.id)
        }).send(res)
    }

    updateProduct = async (req, res, next) => {
        new SuccessResponse({
            message: 'Update Successfully',
            metadata: await ProductService.updateProduct(req.params.id, {...req.body})
        }).send(res)
    }
    deleteProduct = async (req, res, next) => {
        new SuccessResponse({
            message: 'Product have been deleted',
            metadata: await ProductService.deleteProduct(req.params.id)
        }).send(res)
    }
}

export default new ProductController