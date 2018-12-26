const express = require('express');
const router = express.Router();
var user_data = require('../models/user_data');

//searching data from db
router.get('/contacts/:name',(req,res,next)=>{
	user_data.find({$or:[{"name":{ $regex: req.params.name }},{"contact":{$regex: req.params.name}}]},function(err,result){
		res.json(result);
	});
});
//to get  details using email
router.get('/email_search/:email',(req,res,next)=>{
	
	user_data.find({"email":req.params.email},function(err,result){
		res.json(result);
	});	
});
//adding new document do database
router.post('/contact',(req,res,next)=>{ 
	let newuser = new user_data({
		name:req.body.name,
		email:req.body.email,
		contact:req.body.contact,
		address:req.body.address
	});
	newuser.save((err,result)=>{
		if (err){res.json({message:"failed to add cotact",success:"false"});}
		else{res.json({message:"user added succesfully",success:"true"});}
	});
	});
//updating and upserting existing document
router.put('/update',(req,res,next)=>{
	console.log(req.body);
user_data.findOneAndUpdate({"email":req.body.email},req.body,{new:true},(err,doc)=>{
	if (err){res.json({message:"failed to add cotact",success:"false"});}
		else{res.json({message:"user added succesfully",success:"true"});}
	});
});
//deleting document
router.delete('/contact/:id',(req,res,next)=>{	
});

module.exports=router;