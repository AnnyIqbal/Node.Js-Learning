/*****************Assignment 1: reading from stream and piping html file down to client*************** */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) { // res is a writeable stream
    res.writeHead(200, {'Content-Type' : 'text/html'}); 
    var readStream = fs.createReadStream(__dirname + '/writeMe2.html', 'utf8');
    readStream.pipe(res); // piping into res object that's sent to client
});

server.listen(3000);
console.log('listening on port 3000');