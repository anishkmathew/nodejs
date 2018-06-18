/*const logger = require('./logger');
logger.log('Test');
logger.greetings('Anish Mathew');*/
const EventEmitter = require('events');
var emitter = new EventEmitter();

//Register a Listener
emitter.on('msgLog',()=>{
  console.log("Listener called");
})

//Raise an event
emitter.emit('msgLog');

//Path module
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//OS module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory  = os.freemem();
console.log(`TotalMemory : ${totalMemory}`);
console.log(`freeMemory : ${freeMemory}`);

// File system module
const fs = require('fs');
var files = fs.readdirSync('.');
var afiles = fs.readdir('.',(err,result)=>{
  if (err){
    console.log(err);
  }else{
    console.log(result);//Assynchronous
  }
});
console.log(files); //Sychronous
