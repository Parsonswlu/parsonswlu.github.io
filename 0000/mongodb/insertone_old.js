const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://andrewparsons_tmu:cGVyto6BvhpNmJQn@tmucluster2.ipti0ek.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

console.log("starting insertone.js!");
client.connect(err => {
  const collection = client.db("mydb").collection("customers");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  console.log("Trying to insert: " + myobj);

  collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });

});