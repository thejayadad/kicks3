import User from "@/models/User";
import db from "@/lib/db";
import bcrypt from 'bcrypt'

export async function POST(req){
    try {
        await db.connect()

        const {username, email, bio, password: pass} = await req.json()

        const isExisting = await User.findOne({email})

        if(isExisting){
            throw new Error("User already exists")
        }

        const hashedPassword = await bcrypt.hash(pass, 10)

        const newUser = await User.create({username, email, bio, password: hashedPassword})

        const {password, ...user} = newUser._doc

        return new Response(JSON.stringify(user), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 500})
    }
}
