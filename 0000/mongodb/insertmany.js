const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "";

const client = new MongoClient(uri);
async function run() {
  try {
    const db = client.db('tmu');
    const coll = db.collection('foods');
    // Query

    const docs = [
      { name: "cake", healthy: false },
      { name: "lettuce", healthy: true },
      { name: "donut", healthy: false }
    ];

    const query = await coll.insertMany(docs);
    console.log('Multiple document inserted');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);