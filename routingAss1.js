/********************Ass 01: Routing********************** */

var http = require('http');
var fs = require('fs');

function routeToUrl(url) {
    if(url !== '/favicon.ico') {
        if(url !== '/home' && url !== '/about' && url !== '/contact') {
            return fs.createReadStream(`${__dirname}/error.html`);
        }
        else if(url === '/home' || url === '/about' || url === '/contact') {
            return fs.createReadStream(`${__dirname}${url}.html`);
        }
    }
}

var server = http.createServer( function(req, res){
    res.writeHead(202, {'Content-Type': 'text/html'});
    var response = routeToUrl(req.url);
    if(response !== undefined)
        response.pipe(res);
});

server.listen(3000, () => {
    console.log('server is running on port: 3000');
});
