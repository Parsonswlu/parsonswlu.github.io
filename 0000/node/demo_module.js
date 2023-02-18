var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url + "<br>");
  res.write("The date and time are currently: <br>" + dt.myDateTime() + "<br>");
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write("The date and time are currently: \n" + dt.myDateTime());
  res.end();
}).listen(8080); 