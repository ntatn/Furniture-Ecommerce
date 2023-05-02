import {Schema, model} from 'mongoose'

const COLLECTION_NAME = 'Inventories'

const inventorySchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId, 
        ref: 'Product'
    },
    location: {
        type: String,
        default: 'Unkown'
    },
    stock: {
        type: Number,
        required: true
    },
    reservations: {
        type: Array,
        default: [],
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
})

export default model('Inventory', inventorySchema)