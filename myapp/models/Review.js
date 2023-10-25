import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    shoeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shoe",
        required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: true,
    }
}, {timestamps: true})

export default mongoose?.models?.Review || mongoose.model("Review", ReviewSchema)