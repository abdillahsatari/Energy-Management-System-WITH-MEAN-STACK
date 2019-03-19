/**============================================= Declaration ==================================================**/
//expressconf
const express = require('express');
const router = express.Router();
const request = require('request');
const dateFormat = require('dateformat');
// const http = require('http'); 
// bisa menggunakan request dan http (untuk http bisa mnggunakan https)

//dataconf
const jwt =require('jsonwebtoken');
const State = require('../models/state');
const Data = require ('../models/data');
const User = require('../models/user');
// const Day = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss TT");

//dbconf
// const BASE = require('./baseapi');
// const app = express();
// app.use('/baseapi', BASE)

//thingspeakconf
const ThingSpeakClient = require('thingspeakclient');
const client = new ThingSpeakClient();
const yourReadKey = '2TIID04K1RQFBOVJ';
var yourWriteKey = 'VOR6N7HG1IL37PND';
const channelID = 668494;

/**==========================================middleware fuction==============================================**/
function verifyToken(req, res, next){
	if(!req.headers.authorization){
		return res.status(401).send('Unauthorized request')
	}
	let token = req.headers.authorization.split(' ')[1]
	if(token === 'null'){
		return res.status(401).send('Unauthorized request')
	}
	let payload = jwt.verify(token, 'secretKey')
	if (!payload) {
		return res.status(401).send('Unauthorized request')
	}

	req.userId = payload.subject
	next()
}

function updateStatus(req, res, next){
	Data.find({node_id:req.params.node}).sort({ _id: -1 }).limit(3)
	.exec(function(err, datanya) {

		console.log(datanya);
		const data1 = datanya;
		res.json(data1);
		next();
	})
}

function addThingSpeak(req, res, next){
	request.post('https://api.thingspeak.com/talkbacks/30101/commands?api_key=QZHQTD255IW2WWL8&command_string=110030&position=0', function(err,response,body){
    console.log(body);
    next();
  })
}

function callBack(err, resp)
{
    if (!err && resp > 0) {
        console.log('Successfully. response was: ' + resp);
    }
    else {
      console.log(err);
    }
}

/**=========================================== Express Router ===============================================**/
router.get('/fetch', (req,res)=>{
	State.find((err, dataStatus) => {
		if (err)
			console.log(err);
		else
			//contoh callback	
			// res.send("datanya ada di console")
			// console.log(dataStatus);	
			// dataStatus.forEach(function callback (val){
			// 	console.log(val);
			// })
			res.json(dataStatus)		
	})
})

router.get('/fetchroom/:room', (req, res) => {
	// console.log(req.params.room);
	State.find({ruangan:(req.params.room)}, (err, room) => {
		if (err)
			console.log(err);
		else
			res.json(room);
	})
})

router.get('/fetch/:id', (req,res)=>{
	State.findById(req.params.id,(err,state)=>{
		if(err)
			console.log(err);
		else
			res.json(state);
	})
})

router.post('/update/:id',(req,res)=>{
	State.findById(req.params.id, (err,state) =>{
		if(!state)
			return next (new Error('could not load document'));
		else
		state.status = req.body.status;
		state.waktu = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss TT");

		state.save().then(state =>{
			res.json('update done data send to mongodb');
		}).catch(err =>{
			res.status(400).send('update failed');
		})
	})
})

//api draguino with body
// router.post('/recordData', (req,res) => {
// 	let dataRecordNya = {
// 		data : req.body.data,
// 		node_id : req.body.node_id,
// 		sensor_id : req.body.sensor_id,
// 		dateTime : req.body.dateTime
// 	}
// 	// let dataRecord = req.body
// 	let node = new Data(dataRecordNya)
// 	node.save((error, dataRecordNya) => {
// 		if (error) {
// 			console.log(error)
// 		}else{
// 			// let payload = { subject : registeredUser._id}
// 			// let token = jwt.sign(payload, 'secretKey')
// 			res.status(200).send('data added') //sen.(registeredUser)
// 		}
// 	})
// })

//api draguino with parameters
router.post('/recordCurrentData/dataRecord=:data&node_id=:node_id&sensor_id=:sensor_id&dateTime=:dateTime', (req,res) => {
	let dataRecordNya = req.params;
	let node = new Data(dataRecordNya);
	node.save((error, dataRecordNya) => {
		if (error) {
			console.log(error)
		}else{
			// let payload = { subject : registeredUser._id}
			// let token = jwt.sign(payload, 'secretKey')
			res.status(200).send('data added and status updated'); //sen.(registeredUser)
		}
	});

	if (dataRecordNya.data > '0') {
		console.log('statusnya on')
		//update states to 1
		State.findOne({node_id:dataRecordNya.node_id, pin_id:dataRecordNya.sensor_id}, (error, states)=>{
			states.status = '1';
			states.waktu = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss TT");
			console.log(states);
			let stateBaru = new State(states);
			stateBaru.save((error, states) => {
				if (error) {
					console.log(error)
				}
			});
		});
	}
	else{
		console.log('statusnya off');
		//update states to 0
		State.findOne({node_id:dataRecordNya.node_id, pin_id:dataRecordNya.sensor_id}, (error, states1)=>{
			states1.status = '0';
			states1.waktu = dateFormat(new Date(), "dd-mm-yyyy h:MM:ss TT");
			console.log(states1);
			let stateBaru = new State(states1);
			stateBaru.save((error, states1) => {
				if (error) {
					console.log(error)
				}
			});
		})
	}
})

/**========================================= Thingspeak Endpoint =============================================**/

router.post('/thingspeakPost',(req,res)=>{
	var nodenya = req.body.node;
	var pinnya = req.body.pin;
	var statusnya = req.body.status;
	if (statusnya == 1) {
		// res.json("berhasil")
		request.post('https://api.thingspeak.com/talkbacks/30101/commands?api_key=QZHQTD255IW2WWL8&command_string='+nodenya+pinnya+statusnya+'&position=0', (error, respons, body) =>{
			console.log(body);
			res.json("berhasil mengirim command");
		});
	}
	else{
		request.post('https://api.thingspeak.com/talkbacks/30101/commands?api_key=QZHQTD255IW2WWL8&command_string='+nodenya+pinnya+statusnya+'&position=1', (error, respons, body) =>{
			console.log(body);
			res.json("berhasil mengirim command");
		}
	)};
})

// client.attachChannel(channelId, { writeKey:'yourWriteKey', readKey:'yourReadKey'}, callBack);
// client.attachChannel(channelID, { writeKey:'yourWriteKey'}, callBackThingspeak);
client.attachChannel(channelID, { readKey:'yourReadKey'}, callBack);

router.get('/getThingspeak', (req, res)=>{
	request.get('https://api.thingspeak.com/',
        { readKey:yourReadKey }, (err, resp, body) => {
		if (!err && resp > 0) {
		console.log('successfully. Entry number was: ' + resp);
		}
		else {
		console.log('There is an error attaching ' + err);
		}
		res.json(resp);
		});
})


/**========================================= EXPERIMEN =============================================**/

router.get('/getThingspeakid', (req, res) => {

	client.attachChannel(channelID, { readKey: 'yourReadKey'}, function(err, resp, body) {
	if (!err && resp > 0) {
	console.log('update successfully. Entry number was: ' + body);
	}
	else {
	console.log('There is an error attaching ' + err);
	}
	res.json(resp);
	});

})

//updateData versi melalui middleware function (updateStatus)
router.get('/statusUpdate/:room/:node', updateStatus, (req, res) => { 
	// this.datanya[0].status == "1"
	// let data1 =[data1];
	// console.log(data1);
})

//updateData versi langsung melalui router.get
// router.get('/updateData/:node', (req, res) => {
// 	Data.find({node_id:(req.params.node)}, {}, {sort:{_id: -1}, limit:(3)}, (err, node) => {
// 		if (err)
// 			console.log(err);
// 		else
// 			res.json(node);
// 	})
// })

// router.get('/thingspeak', addThingSpeak, (req, res) => { 
// 	// this.datanya[0].status == "1"
// 	// let data1 =[data1];
// 	// console.log(data1);
// })


// router.post('/add', (req,res) => {
// 	let stateData = req.body
// 	let state = new State(stateData)
// 	state.save((error, newData) => {
// 		if (error) {
// 			console.log(error)
// 		}else{
// 			// let payload = { subject : registeredUser._id}
// 			// let token = jwt.sign(payload, 'secretKey')
// 			res.status(200).send(newData) //sen.(registeredUser) {token}
// 		}
// 	})
// })

// router.get('/delete/:id', (req, res) => {
// 	State.findByIdAndRemove({_id:req.params.id}, (err, state) => {
// 		if(err)
// 			res.json(err);
// 		else
// 			res.json('Data Removed');
// 	})
// })

// router.route('/newDataRecord').post((req, res) => {
// 	let data = new Data(req.body);
// 	data.save()
// 		.then(data => {
// 			res.status(200).json({'user':'Added Succesfully'});
// 		})
// 		.catch(err =>{
// 			res.status(400).send('Failed to Created new record');
// 		});
// });


/**========================================== EXPRESS ENDPOINT ==============================================**/
// app.use('/', router);

router.get('/', (req,res)=>{
	res.send('this from datahandler api')
})

console.log('datahandler ok');
module.exports = router