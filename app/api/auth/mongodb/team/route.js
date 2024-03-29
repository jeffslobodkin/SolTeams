import connectToDatabase from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    

      console.log("POST request received");

      const json = await req.json();

      const { db } = await connectToDatabase();
      const { username, description, twitter, projectDescription, projectName, image } = json;
        console.log("Usernamedfsdfsdf: ", username);
        console.log("Description: ", description);
        console.log("Project Description: ", projectDescription);
        //console.log("Bar Value: ", barValue);
        console.log("Twitter: ", twitter);
        console.log("Image: ", image);
        console.log("Project Name: ", projectName);
  
      // Insert or update the user document in the 'users' collection
      await db.collection('teams').updateOne(
        { username },
        { $set: { description, twitter, projectDescription, projectName, image } },
        { upsert: true }
      );
};



export async function GET(req, res) {
  console.log("GET request received");
  const { db } = await connectToDatabase();

  const teams = await db.collection('teams').find().toArray();

  return NextResponse.json(teams);

};
