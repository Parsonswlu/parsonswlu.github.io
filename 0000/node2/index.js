//require the Express module and call express
var express = require('express')
var app = express()
//Following declares URI path / will cause the message Hello World to be sent
app.get('/', function (req, res) {
res.send('Hello World!')
})
 
//application will listen for requests on port number 300
app.listen(3000, function () {
console.log('Example app listening on port 3000!')
})