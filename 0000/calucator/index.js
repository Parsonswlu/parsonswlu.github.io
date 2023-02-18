var fs = require('fs');
var http = require('http');
var url = require('url');
var uc = require('upper-case');


http.createServer(function (req, res) {

    var q = url.parse(req.url, true).query;
    var result = parseInt(q.first) * parseInt(q.second);

    

    res.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile('header.html', function(err, data) {
        res.write(data);
    });


    fs.readFile('footer.html', function(err, data) {
        
        res.write('<b>'+result.toString()+'</b>');
        
        res.end(data);
    });


}).listen(8080);