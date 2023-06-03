import connectToDatabase from "@/lib/mongo";

export async function POST(req, res) {

      const json = await req.json();

      const { db } = await connectToDatabase();
      const { username, description } = json;
        console.log("Usernamedfsdfsdf: ", username);
        console.log("Description: ", description);
  
      // Insert or update the user document in the 'users' collection
      await db.collection('users').updateOne(
        { username },
        { $set: { description } },
        { upsert: true }
      );
  };


  
  
  
  
  
  
  
  