import db from "@/lib/db";
import { verifyJwtToken, verifyJwtToken } from "@/lib/jwt";
import Shoe from "@/models/Shoe";

export async function POST(req) {
    await db.connect()

    const accessToken = req.headers.get("authorization")
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const body = await req.json()
        const newShoe = await Shoe.create(body)

        return new Response(JSON.stringify(newShoe), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}