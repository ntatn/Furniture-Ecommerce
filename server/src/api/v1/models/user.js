import { Schema, model} from "mongoose" 

const COLLECTION_NAME = 'Users'

const userSchema = new Schema({
    name: {
        type:String,
        trim: true,
        maxLength: 150
    },
    email: {
        type:String,
        trim: true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    verify: {
        type: Boolean,
        default: false
    },
    roles: {
        type: Array,
        default: []
    }
},  {
    timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
export default model('User', userSchema)