import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response){}

export async function POST(req: Request, res: Response){
    const { title, desc } = await req.json();
    try {
        return NextResponse.json(
            {title, desc},
            {status: 500}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Error", error},
            {status: 500}
        )
    }
}