import product from "../product.js";
import { getSelectData } from '../../utils/index.js'
const findAll = async({limit, page, select}) =>{
    const skip = (page - 1) * limit
    const products = await product.find()
    .skip(skip)
    .limit(limit)
    .select(getSelectData(select))
    .lean()

    return products
}

export {findAll}