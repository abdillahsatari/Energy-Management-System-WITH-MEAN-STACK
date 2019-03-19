// //expressconf
// const express = require('express');
// const router = express.Router();

var ThingSpeakClient = require('thingspeakclient');
var client = new ThingSpeakClient({server:'http://localhost:8000'});
// https://api.thingspeak.com/talkbacks/30101/commands?api_key=QZHQTD255IW2WWL8&command_string=110051&position=0

var yourReadKey = '2TIID04K1RQFBOVJ';
var yourWriteKey = 'VOR6N7HG1IL37PND';
var channelID = 668494;



// client.attachChannel(channelID, { writeKey:yourWriteKey}, callBackThingspeak);
client.attachChannel(channelID, { writeKey:yourReadKey}, callBackThingspeak);


// client.updateChannel(channelID, {field1: 7, field2: 6}, function(err, resp) {
//     if (!err && resp > 0) {
//         console.log('update successfully. Entry number was: ' + resp);
//     }
//     else {
//       console.log(err);
//     }
// });

function callBackThingspeak(err, resp)
{
    if (!err && resp > 0) {
        console.log('Successfully. response was: ' + resp);
    }
    else {
      console.log(err);
    }
}

// app.use('/', router);

// router.get('/', (req,res)=>{
// 	res.send('this from datahandler api')
// })

// console.log('datahandler ok');
// module.exports = router