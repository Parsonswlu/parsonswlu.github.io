const { query } = require('express');
var express = require('express');
var app = express();

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://andrewparsons_tmu:cGVyto6BvhpNmJQn@tmucluster2.ipti0ek.mongodb.net/?retryWrites=true&w=majority";

const dbname = 'ccps530_lab7';
const collname =  'books';

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: false
}));

app.get('/', function (req, res) {
  res.send('<h1>Andrew Parsons Book Inventory</h1><ul><li><a href="/bookinventory/list">Current Book List</a></li><li><a href="/bookinventory/add">Add a Book</a></li></ul><h2>Home Page</h2>');
})


app.get('/bookinventory/list', function (req, res) {
  const client = new MongoClient(uri);
  var bookinventory = [];
  async function getBookInventory() {
    try {
      const db = client.db(dbname);
      const coll = db.collection(collname);
      
      bookinventory = await coll.find({}).toArray();
      var html = '<p>'
      for (var i = 0; i < bookinventory.length; i++) {
        html = html + 'Title: ' + bookinventory[i].title + '<br>';
        html = html + 'Author: ' + bookinventory[i].author + '<br>';
        html = html + 'Publisher: ' + bookinventory[i].publisher + '<br>';
        html = html + 'Date: ' + bookinventory[i].date + '<br>';
        html = html + 'Website: ' + bookinventory[i].website + '<br>';
        html = html + '<br>';
      }
      html += '</p>'
    
      res.send('<h1>Andrew Parsons Book Inventory</h1><ul><li><a href="/">Home Page</a></li><li><a href="/bookinventory/add">Add a Book</a></li></ul><h2>Current Book List: </h2>' + html);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  getBookInventory().catch(console.dir);
});


app.get('/bookinventory/add', function (req, res) {

  var html = '<br><form action="/bookinventory/addbook" method="post"><label for="title">Title:</label><input type="text" id="title" name="title"><br><label for="author">Author:</label><input type="text" id="author" name="author"><br><label for="publisher">Publisher:</label><input type="text" id="publisher" name="publisher"><br><label for="date">Date:</label><input type="text" id="date" name="date"><br><label for="website">Website:</label><input type="text" id="website" name="website"><br><input type="submit" value="Submit"><br></form>'

  res.send('<h1>Andrew Parsons Book Inventory</h1><ul><li><a href="/">Home Page</a></li><li><a href="/bookinventory/list">Current Book List</a></li></ul><h2>Insert a book: </h2>' + html);
});

app.post('/bookinventory/addbook', function (req, res) {
  const client = new MongoClient(uri);

  var new_doc = { 
    'title': req.body.title,
    'author': req.body.author,
    'publisher': req.body.publisher,
    'date': req.body.date,
    'website': req.body.website 
  };

  async function addBook() {
    try {
      const db = client.db(dbname);
      const coll = db.collection(collname);
      
      const query = await coll.insertOne(new_doc);
      console.log('1 document inserted');
      res.send('<h1>Andrew Parsons Book Inventory</h1><ul><li><a href="/">Home Page</a></li><li><a href="/bookinventory/list">Current Book List</a></li><li><a href="/bookinventory/add">Add Another Book</a></li></ul><h2>Title: ' + req.body.title + ' is added!</h2>');
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  addBook().catch(console.dir);
});


app.listen(3000);