const express = require('express')
const router = express.Router()
const mongoose =require('mongoose')

//import mongoose from 'mongoose';
// const db = "mongodb://localhost:27017/MySimpleDB"
// mongoose.connect(db, err =>{
// 	if (err) {
// 		console.error('Database Error ' + err)
// 	}
// 	else{
// 		console.log('connected to mongodb')
// 	}	
// })

// mongoose.connect('mongodb://localhost:27017/MySimpleDB');
// const connection = mongoose.connection;
// connection.once('open', () => {
// 	console.log('MongoDb database connection established succcesfully!');
// });

//mongodb://localhost:27017/MySimpleDB
//mongodb://abdillahsatari08:abdillahsatari08@ds159782.mlab.com:59782/energydb
// mongodb://abdillahsatari:abdicot2018@ds119113.mlab.com:19113/lora_cot
// mongodb://abdillahsatari08:abdillahsatari08@d+119113.mlab.com:19113/lora_cot
const db = mongoose.connect('mongodb://localhost:27017/MySimpleDB',  { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open',(db, err) => {
	if (err)
		console.error('Database Error ' + err)
	else
		console.log('MongoDb running succesfully!!');
});

module.exports = router