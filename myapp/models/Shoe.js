import mongoose from 'mongoose'

const ShoeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    categories: {         
    type: String,
    required: true,
    enum: [
        'Nature',
        'Mountain',
        'Ocean',
        'Wildlife',
        'Forest',
    ]
    },
    sizes: [{
        type: Number,
        required: true,
    }],
    imageUrl: {
        type: String,
        required: true,
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    stockQuantity: {
        type: Number,
        required: true,
    },
}, { timestamps: true });


export default mongoose?.models?.Shoe || mongoose.model("Shoe", ShoeSchema)