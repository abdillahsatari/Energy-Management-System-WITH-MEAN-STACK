const mongoose = require('mongoose')
//import mongoose from 'mongoose'

const Schema = mongoose.Schema
const dataSchema = new Schema({
	// node_id : String,
	// sensor_id : String,
	// data : String,
	// dateTime : String
	data : String,
	node_id : String,
	sensor_id : String,
	dateTime : String
})

module.exports = mongoose.model('data', dataSchema, 'current_record_data')
// model name 		=> 'data'
// schema module 	=> 'userSchema'
// collection in db	=> 'users' 