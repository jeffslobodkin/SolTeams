import connectToDatabase from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function POST(req, res) {

      const json = await req.json();

      const { db } = await connectToDatabase();
      const { username, description, barValue, twitter } = json;
        console.log("Usernamedfsdfsdf: ", username);
        console.log("Description: ", description);
        console.log("Bar Value: ", barValue);
        console.log("Twitter: ", twitter);
  
      // Insert or update the user document in the 'users' collection
      await db.collection('users').updateOne(
        { username },
        { $set: { description, barValue, twitter } },
        { upsert: true }
      );
  };

  export async function GET(req, res) {
    console.log("GET request received");
    const { db } = await connectToDatabase();
  
    const users = await db.collection('users').find().toArray();

    return NextResponse.json(users);
  
  };




  
  
  
  
  
  
  
  