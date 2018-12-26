var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');



//server port
var port = 8080;
var app = express();

const route = require('./routes/route');

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/UserDemo');



//addding middleware
app.use(cors());
//body-parser

app.use(bodyparser.json());


app.use('/api',route);
//homepage content 
app.get('/',(req,res)=>{
	res.send("<hr>this is homepage");
}
);

//defining server 
app.listen(port,()=>{
	console.log("server is created");
});
