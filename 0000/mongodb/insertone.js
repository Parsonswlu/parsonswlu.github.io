const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "";

const client = new MongoClient(uri);
async function run() {
  try {
    const db = client.db('db');
    const coll = db.collection('companies');
    // Query
    const data = { name: "Company Inc", address: "Highway 37" };
    const query = await coll.insertOne(data);
    console.log('1 document inserted');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);