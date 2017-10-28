//cerating a web server in node js
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var port = process.env.PORT || 4039;
var apiController = require('./controllers/apiController');
var setUpController = require('./controllers/setUpController');


app.use('./assets', express.static(__dirname + './public'));
app.set('view engine', 'ejs');
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// app.get('/api/setUpTodos', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
mongoose.connect(config.getDbConnectionString());
apiController(app);
setUpController(app);
app.listen(port);
// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8090);
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'adhithebaby@gmail.com',
//     pass: 'Iwillwin77'
//   }
// });

// var mailOptions = {
//   from: 'adhithebaby@gmail.com',
//   to: 'adhithyaprabhu77@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy tooo easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// exports.myDateTime = function () {
//     return Date();
// };
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	var html = fs.readFileSync(__dirname + './index.html');
// 	res.end(html);//done sending
// }).listen(1336, '127.0.0.1');


// var a = 21;
// var b = 2;
// var c = a + b;

// console.log("print---->", c);
// //function as first-class and playing with expressions
// function sampleOne(func){
// 	func();
// }
// var adiSample = () => {
// 	console.log("hey man");
// }
// adiSample();
// sampleOne(adiSample);

// //use the functions expressin on the fly
// sampleOne(() => {
// 	console.log("hey adi");
// });

//-----------------------------------------------


// var sample = require('./greet.js');
// sample();
//-----------------------------------------------

//IIFE -immediately invoked Function Expression
// var nameData = "Adhithya";


// (function sample() {
// 	let nameData = "giri";
// 	console.log("printing here--->", nameData);
// }());

// console.log(nameData);

//Pssing some arguments
// var nameData = "Adhithya";
// (function sample(lastName) {
// 	let nameData = "giri";
// 	console.log("printing here--->", nameData);
// 	console.log(lastName);
// }('Jordan'));

// console.log(nameData);


//-----------------------------------------------