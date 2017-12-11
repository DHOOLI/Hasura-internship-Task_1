var express=require("express")
var cookieParser = require('cookie-parser')

var app=express()
app.use(cookieParser())
app.use(express.static('files'))
var bodyParser = require('body-parser')
 var form = require('express-form')
app.use(bodyParser())
var router = express.Router()
app.get("/",(req,res)=> res.send("<html><body><h1><center>Hello World! This is Niranjan Dhooli</center></h1></body></html>"))
app.get('/setcookie',function(req, res){
     res.cookie("niranjan", '21').send('Cookie is set');
      
});
app.get("/getcookies",(req,res)=>res.send( req.cookies));
app.get('/robots.txt', function(req, res){
   res.status(403).end();
});

app.post('/input', function(req, res) {
	console.log(req.body.name)
  res.send('You sent the name ' + req.body.name +'".');
});



app.listen("8080",()=>console.log())