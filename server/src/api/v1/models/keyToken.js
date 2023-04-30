import {Schema, model} from 'mongoose'

const COLLECTION_NAME = 'Keys'

const keyTokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    privateKey: {
        type: String,
        required: true,
    },
    publicKey: {
        type: String,
        required: true,
    },
    refreshTokensUsed: {
        type: Array,
        default: []
    },
    refreshToken: {
        type: String,
        required: true,
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
})

export default model('Key', keyTokenSchema)