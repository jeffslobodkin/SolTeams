import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://jeffs7212:Regency7212@signinsystem.srubumb.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (!URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let client;

if ('development' !== 'production') {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(URI, options);
  }
  client = global._mongoClient;
} else {
  client = new MongoClient(URI, options);
}

async function connectToDatabase() {
  await client.connect();
  const db = client.db("userDB"); // Add your database name here
  return { db, client };
}

export default connectToDatabase;
