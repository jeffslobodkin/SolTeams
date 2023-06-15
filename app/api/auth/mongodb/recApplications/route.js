import connectToDatabase from "@/lib/mongo";
import { NextResponse } from "next/server";


export async function POST(req, res) {
    

    console.log("POST request received");

    const json = await req.json();

    const { db } = await connectToDatabase();
    const { username } = json;

    const team = await db.collection('teams').findOne({ username });

    return NextResponse.json(team.applications);
};
