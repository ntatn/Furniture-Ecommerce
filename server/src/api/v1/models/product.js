import { Schema, model} from "mongoose"; 

const COLLECTION_NAME = 'Products'

const productSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    thumb: {
        type:String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    description: {
        type: String,
        maxLength: 255
    },
    quantity: {
        type: Number,
        required:true
    }
},  {
    timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
export default model('Product', productSchema)