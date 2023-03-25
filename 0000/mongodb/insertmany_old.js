const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://andrewparsons_tmu:cGVyto6BvhpNmJQn@tmucluster2.ipti0ek.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

console.log("starting insertmany.js!");
client.connect(err => {
  const collection = client.db("tmu").collection("foods");
  var docs = [
    { name: "cake", healthy: false },
    { name: "lettuce", healthy: true },
    { name: "donut", healthy: false }
  ];
  console.log("Trying to insert: " + docs);


  collection.insertMany(docs, function(err, res) {
    if (err) throw err;
    console.log("documents inserted");
    client.close();
  });

});