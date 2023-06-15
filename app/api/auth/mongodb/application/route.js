import connectToDatabase from "@/lib/mongo";
import { NextResponse } from "next/server";
import { useSession } from "next-auth/react";

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

// export default async function GET(req, res) {
//   const { data: session } = useSession();
//   const username = session.user.name;

//   // Connect to the MongoDB database
//   const { db } = await connectToDatabase();

//   // Find the team document with the matching username
//   const team = await db.collection('teams').findOne({ username })

//   return NextResponse.json(team.applications);

//   // Send the applications array in the response
// }
