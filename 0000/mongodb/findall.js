const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://andrewparsons_tmu:cGVyto6BvhpNmJQn@tmucluster2.ipti0ek.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
async function run() {
  try {
    // const db = client.db('db');
    // const coll = db.collection('companies');
    const db = client.db('ccps530_lab7');
    const coll = db.collection('books');
    // Query
    // const filter = {};
    const query = await coll.find({}).toArray();
    console.log(query);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);