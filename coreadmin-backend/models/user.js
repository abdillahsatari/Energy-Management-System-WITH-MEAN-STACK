const mongoose = require('mongoose')
//import mongoose from 'mongoose'

const Schema = mongoose.Schema
const userSchema = new Schema({
	u_id : String,
	email : String,
	pwd : String,
	name : String,
	phone : String,
	gender : String,
	status :{
		type : String,
		default : 'Online'
	} 
})

module.exports = mongoose.model('user', userSchema, 'users')
// model name 		=> 'user'
// schema module 	=> 'userSchema'
// collection in db	=> 'users' 