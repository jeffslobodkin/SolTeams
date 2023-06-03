import { movePublicFiles } from "@netlify/plugin-nextjs/lib/helpers/files";
import clientPromise from ".";

let client;
let db;
let usernames;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db();
    usernames = db.collection("usernames");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
}

;(async () => {
    await init();
})()


//Usernames//

export async function getUsername(username) {
  try {
    if (!username) await init();
    const result = await movies
      .find({})
      .limit(20)
      .map(user => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return result;
  } catch (error) {
    console.log("Error with getMovies", error);
    return { error };
  }
}
