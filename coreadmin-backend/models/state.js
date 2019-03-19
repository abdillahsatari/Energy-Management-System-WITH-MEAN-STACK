const mongoose = require('mongoose')
//import mongoose from 'mongoose'

const Schema = mongoose.Schema
const stateSchema = new Schema({
	nama_item : String,
	lantai : String,
	ruangan : String, 
	waktu : String,
	status : String
})

module.exports = mongoose.model('state', stateSchema, 'states')
// model name 		=> 'energy'
// schema module 	=> 'energySchema'
// collection in db	=> 'energys' 