/* ************8********** */
// var events = require('events'); // requiring the core module

// // var myEvent = new events.EventEmitter();

// // myEvent.on('someEvent', function(msg){ // set event jb 'someEvent occur ho tb call this callback function
// //     console.log(msg);
// // });

// // myEvent.emit('someEvent', 'Hello World!'); // manually emitting the 'someEvent'

// var util = require('util');

// var Person = function(name) { // created constructor
//     this.name = name;
// };

// // whenever a person's instance will be created, it'll inherit the EventEmitter property from events module
// util.inherits(Person, events.EventEmitter); 

// var james = new Person('james'); // creating objects from constructor
// var mary = new Person('mary');
// var people = [james, mary];

// people.forEach(function(xyz){
//     xyz.on('speak', function(msg){ //attach listener
//         console.log(`${xyz.name} said: ${msg}`);
//     });
// });

// james.emit('speak', 'Hey dude'); // emit events
// mary.emit('speak', 'Hiee');

/* ************9********** */
// var fs = require('fs');

// // readFileSync: a sync function to read a file (file path with file name, char encoding)
// var readMe = fs.readFileSync('readFile.txt', 'utf8'); 
// // console.log(readMe);

// //writeFileSync: a sync function to write a file (file name, contents to be written in it)
// fs.writeFileSync('writeFile.txt', readMe);

// // Async methods to read n write file (filename, encoding, callback function fired when the request is complete (error, data that it read from file))
// fs.readFile('readFile.txt', 'utf8', function(err, data) {
//     // console.log(data);
//     fs.writeFile('writeMe2.txt', data, function(err){
//         console.log('written!');
//     });
// });
// // deletes a file 
// fs.unlink('writeMeee.txt', function(err){ 
//     console.log('deleted');
// }); 

// fs.mkdirSync('anny'); // makes directory synchronously
// fs.rmdirSync('anny'); // removes directory synchronously

//when using async functions, we need callbacks to be fired when the request is fulfilled
// fs.mkdir('anny', function(){
//     fs.readFile('readFile.txt', 'utf8', function(err, data){
//         fs.writeFile('./anny/writeMe.txt', data, function(err){});
//     });
// });

// // a non empty dir cant be removed, so dlt the file first then the dir
// fs.unlink('./anny/writeMe.txt', function(){ // dlt file
//     fs.rmdir('anny'); //remove dir
// });

/*************************CreateServer ******************************* */
// var http = require('http'); // required the core module called http

// var server = http.createServer(function(req, res){ // created server (callback (request, responce))
//     console.log('request url : ' + req.url); // req object has a property 'url' that tells the request url
//     res.writeHead(200, {'Content-Type': 'text/plain'}); // responce headers carry additional info abt responce (status, header-info)
//     res.end('Hi Im Anny!'); // its imp to end res b4 sending to client, (string or buffer as parameter and this parameter is passed to client)
// });

// server.listen(3000, '127.0.0.1'); //added listener to server (port, hostname)
// console.log('listening to server on port: 3000');

/***************************ReadableStream & WriteableStream*********************** */
// var fs = require('fs'); // required the core module called file system

// var readStream = fs.createReadStream(__dirname + '/readFile.txt', 'utf8'); // created readable stream (path given as dir/file, encoding)
// var writeStream = fs.createWriteStream(__dirname + '/writeStreamFile.txt'); // created writeable stream (path as to where should it  be created)

// readStream.on('data', function(chunk){ // add listener (data, call back function(the 1st parameter data is passed as chunk))
//     console.log('new chunk received: ', chunk); 
//     writeStream.write(chunk); // called write method on the writeable stream and passed the chunk to be written in
// });

/*****************Pipes: replaces the manual reading n writing to stream*************** */
// var http = require('http');
// var fs = require('fs'); // required the core module called file system

// var readStream = fs.createReadStream(__dirname + '/readFile.txt', 'utf8'); // created readable stream (path given as dir/file, encoding)
// var writeStream = fs.createWriteStream(__dirname + '/writeStreamFile.txt'); // created writeable stream (path as to where should it  be created)

// readStream.pipe(writeStream); // piping from readStream into the writeStream

/*****************Assignment 1: reading from stream and piping data down to client*************** */

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res) { // res is a writeable stream
//     res.writeHead(200, {'Content-Type' : 'text/html'}); 
//     var readStream = fs.createReadStream(__dirname + '/writeMe2.html', 'utf8');
//     readStream.pipe(res); // piping into res object that's sent to client
// });

// server.listen(3000);
// console.log('listening on port 3000');

/*****************rendering json data*************** */

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res) { // res is a writeable stream
//     res.writeHead(200, {'Content-Type' : 'application/json'}); 
//     var myObj = {
//         name: 'Anny',
//         gender: 'female',
//         lives: 'Karachi'
//     }
//     res.end(JSON.stringify(myObj)); // obj sent to client
// });

// server.listen(3000);
// console.log('listening on port 3000');

/********************Routing********************** */

var http = require('http');
var fs = require('fs');

var server = http.createServer( function(req, res){
    console.log(req.url);
    switch(req.url) {
        case '/home' || '/': {
            res.writeHead(202, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname + '/home.html').pipe(res);
            break;
        }
        case '/about': {
            res.writeHead(202, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname + '/about.html').pipe(res);
            break;
        }
        case '/contact': {
            res.writeHead(202, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname + '/contact.html').pipe(res);
            break;
        }
        default: {
            res.writeHead(202, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname + '/error.html').pipe(res);
        }
    }
});

server.listen(3000);
console.log('server is running on port: 3000');