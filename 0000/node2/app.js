var express = require('express');
var app = express();

app.use(express.json() );       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 

var users = [
  {'user':'test','password':'passtest'},
  {'user':'test2','password':'passtest2'},
  {'user':'test3','password':'passtest3'},
  {'user':'test4','password':'passtest4'},
  {'user':'test5','password':'passtest5'},
  {'user':'test6','password':'passtest6'},
]

app.get('/',function(req,res){
  // res.send('Hello World!');
  res.send('<h1>Home Page</h1><br><a href="/users/list">list of users</a> <br> <a href="users/add">add a user</a>');
})


app.get('/users/list', function(req, res){

   var html = '<p>'
   for (var i = 0; i < users.length; i++) {
      html = html + users[i].user + ' ' + users[i].password + '<br>';
    }
    html += '</p>'

   res.send('List of users: ' + html);
});


app.get('/users/add', function(req, res){

  var html = '<br><form action="/users/adduser" method="post"><label for="uname">Username:</label><br><input type="text" id="uname" name="uname"><input type="submit" value="Submit"><br></form>'

  res.send('Insert a user: ' + html);
});

app.post('/users/adduser', function(req, res){

  console.log(req.body);
  var new_user = req.body.uname;

  var new_json = {'user': new_user};
  users.push(new_json);
  res.send('User: ' + new_user + ' is added!<br> <a href="/users/list">list of users</a>');
}

);


app.listen(3000);