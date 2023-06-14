import connectToDatabase from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    

      console.log("POST request received");

      const json = await req.json();

      const { db } = await connectToDatabase();
      const { username } = json;
  
      // Insert or update the user document in the 'users' collection
      await db.collection('teams').findOneAndUpdate(
        { username },
        { $push: { applications: username } },
        { returnOriginal: false }
      );
};
