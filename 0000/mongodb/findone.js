const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


client.connect(err => {
  const collection = client.db("mydb").collection("customers");


  collection.findOne({}, function(err, res) {
    if (err) throw err;
    console.log(res.name);
    client.close();
  });

});


