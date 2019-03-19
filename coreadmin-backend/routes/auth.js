//expressconf
const express = require('express')
const router = express.Router()
//authconf
const jwt =require('jsonwebtoken')
const User = require('../models/user')
//dbconf
const BASE = require('./baseapi');
const app = express();
app.use('/baseapi', BASE);

// //verifiyconf
// function verifyToken(req, res, next){
// 	if(!req.headers.authorization){
// 		return res.status(401).send('Unauthorized request')
// 	}
// 	let token = req.headers.authorization.split(' ')[1]
// 	if(token === 'null'){
// 		return res.status(401).send('Unauthorized request')
// 	}
// 	let payload = jwt.verify(token, 'secretKey')
// 	if (!payload) {
// 		return res.status(401).send('Unauthorized request')
// 	}
// 	req.userId = payload.subject
// 	next()
// }

router.get('/', (req,res) => {
	res.send('this is authentication API')
})

router.post('/register', (req,res) => {
	let userData = req.body
	let user = new User(userData)
	user.save((error, registeredUser) => {
		if (error) {
			console.log(error)
		}else{
			let payload = { subject : registeredUser._id}
			let token = jwt.sign(payload, 'secretKey')
			res.status(200).send({token}) //sen.(registeredUser)
		}
	})
})

router.post('/login', (req, res) =>{
	let userData = req.body
	User.findOne({u_id: userData.u_id}, (error, user) => {
		if(error){
			console.log(error)
		}else{
			if(!user){
				res.status(401).send('Invalid ID')
			}else{
				if (user.pwd !== userData.pwd) {
					res.status(401).send('invalid Password')
				}else{
					let payload = { subject : user._id}
					let token = jwt.sign(payload, 'secretKey')
					res.status(200).send({token});//send({token}) send(user)
				}
			}
		}
	})
})

router.post('/userInfo', (req, res) =>{
	let userData = req.body
	User.findOne({u_id: userData.u_id}, (error, user) => {
		if(error){
			console.log(error)
		}else{
			if(!user){
				res.status(401).send('Invalid ID')
			}else{
				if (user.pwd !== userData.pwd) {
					res.status(401).send('invalid Password')
				}else{
					res.status(200).send([user]);//send({token}) send([user]) [] untuk menampilkan data dala binding array
				}
			}
		}
	})
})

// router.get('/regNav', (req, res) =>{
// 	let navigations = [
// 	  {
// 	    title: true,
// 	    name: 'Controls'
// 	  },
// 	  {
// 	    name: 'Dashboard',
// 	    url: '/dashboard',
// 	    icon: 'icon-speedometer',
// 	    badge: {
// 	      variant: 'info',
// 	      text: 'NEW'
// 	    }
// 	  },
// 	  {
// 	    name: 'Charts',
// 	    url: '/charts',
// 	    icon: 'icon-pie-chart',
// 	  },
// 	  {
// 	    name: 'Tables',
// 	    url: '/tables',
// 	    icon: 'icon-puzzle'
// 	  },
// 	  {
// 	    divider: true
// 	  },
// 	  {
// 	    title: true,
// 	    name: 'Users',
// 	    class:'mt-3',
// 	  },
// 	  {
// 	    name: 'Profile',
// 	    url: '/user',
// 	    icon: 'icon-user'
// 	  },
// 	  {
// 	    name: 'Setting',
// 	    url: '/config',
// 	    icon: 'icon-wrench'
// 	  },
// 	  {
// 	    name: 'Login',
// 	    url: '/login',
// 	    icon: 'icon-power'
// 	  }
// 	]
// 		res.json(navigations)
// })

// router.get('/specNav', (req, res) =>{
// 	let navigations = [
// 	  {
// 	    title: true,
// 	    name: 'Controls'
// 	  },
// 	  {
// 	    name: 'Dashboard',
// 	    url: '/dashboard',
// 	    icon: 'icon-speedometer',
// 	    badge: {
// 	      variant: 'info',
// 	      text: 'NEW'
// 	    }
// 	  },
// 	  {
// 	    name: 'Charts',
// 	    url: '/charts',
// 	    icon: 'icon-pie-chart',
// 	  },
// 	  {
// 	    name: 'Tables',
// 	    url: '/tables',
// 	    icon: 'icon-puzzle'
// 	  },
// 	  {
// 	    divider: true
// 	  },
// 	  {
// 	    title: true,
// 	    name: 'Users',
// 	    class:'mt-3',
// 	  },
// 	  {
// 	    name: 'Profile',
// 	    url: '/user',
// 	    icon: 'icon-user'
// 	  },
// 	  {
// 	    name: 'Setting',
// 	    url: '/config',
// 	    icon: 'icon-wrench'
// 	  },
// 	  {
// 	    name: 'Login',
// 	    url: '/login',
// 	    icon: 'icon-power'
// 	  },
// 	  {
// 	  	name: 'Logout',
// 	  	url: '/logout',
// 	  	icon: 'icon-power'
// 	  }
// 	]
// 		res.json(navigations)
// })

// router.get('/dashboard', verifyToken, (req, res) =>{

// })
module.exports = router