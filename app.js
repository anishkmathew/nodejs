/*const logger = require('./logger');
logger.log('Test');
logger.greetings('Anish Mathew');*/
const EventEmitter = require('events');
var emitter = new EventEmitter();

//Register a Listener
emitter.on('msgLog',(e)=>{
  console.log("Listener called" ,e);
})

//Raise an event
emitter.emit('msgLog', {id:3, data : "Test"});

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
