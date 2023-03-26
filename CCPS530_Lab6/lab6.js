var express = require('express');
var app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: false
}));

var bookinventory = [{
  title: "Deep Learning for Coders with fastai & PyTorch: AI Applications Without a PhD",
  author: "Jeremy Howard & Sylvain Gugger",
  publisher: "O'Reilly Media, Inc.",
  date: "2021-11-05",
  website: "https://course.fast.ai/Resources/book.html"
},
{
  title: "Quantum Computation and Quantum Information: 10th Anniversity Edition",
  author: "Michael A. Nielsen and Isaac L. Chuang",
  publisher: "Cambridge University Press",
  date: "2011-01-30",
  website: "https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE#overview"
},
{
  title: "Spatial Computing",
  author: "Shashi Shekhar and Pamela Vold",
  publisher: "The MIT Press",
  date: "2020-02-18",
  website: "https://mitpress.mit.edu/9780262538046/spatial-computing/"
},
{
  title: "Machine Learning Engineering",
  author: "Andriy Burkov",
  publisher: "True Positive Inc.",
  date: "2020-09-08",
  website: "http://www.mlebook.com/wiki/doku.php"
},
{
  title: "Principles of Computer Architecture",
  author: "Miles J. Murdocca, Vincent P. Heuring",
  publisher: "Prentice-Hall",
  date: "1999-11-29",
  website: "https://academicos.azc.uam.mx/oan/lac/Murdocca_en.pdf"
}
];

app.get('/', function (req, res) {
  res.send('<h1>Andrew Parsons Book Inventory</h1><ul><li><a href="/bookinventory/list">Current Book List</a></li><li><a href="/bookinventory/add">Add a Book</a></li></ul><h2>Home Page</h2>');
})


app.get('/bookinventory/list', function (req, res) {

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
});


app.get('/bookinventory/add', function (req, res) {

  var html = '<br><form action="/bookinventory/addbook" method="post"><label for="title">Title:</label><input type="text" id="title" name="title"><br><label for="author">Author:</label><input type="text" id="author" name="author"><br><label for="publisher">Publisher:</label><input type="text" id="publisher" name="publisher"><br><label for="date">Date:</label><input type="text" id="date" name="date"><br><label for="website">Website:</label><input type="text" id="website" name="website"><br><input type="submit" value="Submit"><br></form>'

  res.send('<h1>Andrew Parsons Book Inventory</h1><ul><li><a href="/">Home Page</a></li><li><a href="/bookinventory/list">Current Book List</a></li></ul><h2>Insert a book: </h2>' + html);
});

app.post('/bookinventory/addbook', function (req, res) {
  var new_json = { 
    'title': req.body.title,
    'author': req.body.author,
    'publisher': req.body.publisher,
    'date': req.body.date,
    'website': req.body.website 
  };
  bookinventory.push(new_json);
  res.send('<h1>Andrew Parsons Book Inventory</h1><ul><li><a href="/">Home Page</a></li><li><a href="/bookinventory/list">Current Book List</a></li><li><a href="/bookinventory/add">Add Another Book</a></li></ul><h2>Title: ' + req.body.title + ' is added!</h2>');
}

);


app.listen(3000);