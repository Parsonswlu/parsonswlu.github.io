const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


client.connect(err => {
  const collection = client.db("ryerson").collection("foods");
  var requested_food = "lettuce";

  var query = {name: 'coke' };
  var newvalues = { $set: { healthy: true } };



  collection.updateOne(query, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res);
    client.close();
  });

});


