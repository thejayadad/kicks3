import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
    },
    bio:{
        type: String,

    },
    followers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shoe',
    }],
}, { timestamps: true })

export default mongoose?.models?.User || mongoose.model("User", UserSchema)