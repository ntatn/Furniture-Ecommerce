import productModel from '../models/product.js'
import { BadRequestError } from '../middlewares/error.response.js'
import { findAll } from '../models/repositories/product.repo.js'
import insertInventory from '../models/repositories/inventory.repo.js'
import cloudinary from '../../../config/cloudinary.config.js'

//define Factory class

class Product {
    
    static createProduct = async ({title, thumb, price, description, quantity, category})=>{
        const result = await cloudinary.uploader.upload(thumb, {
            folder: 'products'
        })
        const product = await productModel.create({
            title,
            thumb: result.secure_url, 
            price, 
            description, 
            quantity, 
            category
        })
        if(product){
            await insertInventory({
                productId: product._id,
                stock: quantity
            })
        }else{
            throw new BadRequestError('Cant create product')
        }
        
        return product
    }

    static findAllProducts = async ({limit = 20, page = 1}) => {
        return await findAll({limit, page, select: ['title', 'thumb', 'price','description','quantity','category']})
    }

    static findOneProduct = async(productId) => {
        return await productModel.findById(productId)
    }

    static updateProduct = async (productId, bodyUpdate) => {
        await productModel.findByIdAndUpdate(productId, bodyUpdate)
    }

    static deleteProduct = async (productId) => {
        await productModel.findByIdAndDelete(productId)
    }
}

export default Product