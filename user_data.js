var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//defining schema for data
var new_user = new Schema({
name:String,
email:{
type:String,
required:true}, 
contact:String,
address:String
});
module.exports = mongoose.model("user_data",new_user);