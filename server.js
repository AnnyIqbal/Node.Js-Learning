/*********tutorial # 23***********Express routing********************** */

// var express = require('express');

// var app = express();

// app.get('/', function(req, res) {
//     res.send('this is home page');
// });
// app.get('/about', function(req, res) {
//     res.send('this is about page');
// });
// app.get('/contact', function(req, res) {
//     res.send('this is contact page');
// });

// app.listen(3000);

/*********tutorial # 24***********Express route params********************** */
// var express = require('express');

// var app = express();

// app.get('/', function(req, res) {
//     res.send('this is home page');
// });
// app.get('/about', function(req, res) {
//     res.send('this is about page');
// });
// app.get('/contact', function(req, res) {
//     res.send('this is contact page');
// });
// app.get('/profile/:id', function(req, res) {
//     res.send('u requested the profile for id ' + req.params.id);
// });
// app.get('/profile/:name', function(req, res) {
//     res.send('u requested the profile with name ' + req.params.name);
// });

// app.listen(3000);

/*********tutorial # 25+26***********template engines********************** */

// var express = require('express');

// var app = express();

// app.set('view engine', 'ejs'); // template k lie engine set kia

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/error.html');
// });
// app.get('/about', function(req, res) {
//     res.sendFile(`${__dirname}/about.html`);
// });
// app.get('/contact', function(req, res) {
//     res.sendFile(`${__dirname}/contact.html`);
// });
// // app.get('/profile/:id', function(req, res) {
// //     res.render('profile', {person: req.params.id});
// // });
// app.get('/profile/:name', function(req, res) {
//     var data = {age: 29, job: 'ninja', hobbies: ['eating', 'sleeping', 'coding']};
//     res.render('profile', {person: req.params.name, data: data});
// });

// app.listen(3000);

// /*********tutorial # 29***********query strings****************** */


// var express = require('express');

// var app = express();

// app.set('view engine', 'ejs'); // template k lie engine set kia
// app.use('/assets', express.static('assets')); // middleware to serve static files express.static(directory name)

// app.get('/', function(req, res) {
//     res.render('home');
// });
// app.get('/home', function(req, res) {
//     res.render('home');
// });
// app.get('/about', function(req, res) {
//     res.render(`about`);
// });
// app.get('/contact', function(req, res) {
//     res.render(`contact`, {qs: req.query});
// });
// app.get('/profile/:name', function(req, res) {
//     var data = {age: 29, job: 'ninja', hobbies: ['eating', 'sleeping', 'coding']};
//     res.render('profile', {person: req.params.name, data: data});
// });

// app.listen(3000);

/*********tutorial # 30***********post request****************** */


var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs'); // template k lie engine set kia
app.use('/assets', express.static('assets')); // middleware to serve static files express.static(directory name)

app.get('/', function(req, res) {
    res.render('home');
});
app.get('/home', function(req, res) {
    res.render('home');
});
app.get('/about', function(req, res) {
    res.render(`about`);
});
app.get('/contact', function(req, res) {
    res.render(`contact`, {qs: req.query});
});
app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render(`contact-success`, {data: req.body});
});
app.get('/profile/:name', function(req, res) {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'sleeping', 'coding']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
