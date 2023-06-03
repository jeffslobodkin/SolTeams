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

