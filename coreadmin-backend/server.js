const express = require('express')
const bodyParser =require('body-parser')
const cors = require('cors')
const path = require ('path')

const PORT = process.env.PORT || 4000; //4000;//3600;
//process.env.PORT || 4000;
const AUTH = require('./routes/auth')
const DATA = require('./routes/datahandler')

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use('/auth', AUTH)
app.use('/datahandler', DATA)
// when we make a request in localhost with "localhost:3000/auth"
// the server knows it has to use AUTH
// and the AUTH is come from auth.js which is come form ./routes/auth


//theese will connect our angular dist file to our exxpres as a back-end
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req,res)=>{
	res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
})

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.get('/', function(req,res) {
	res.send('server allready online')
})

app.listen(PORT, function() {
	console.log('server running on port ' + PORT)
}) 