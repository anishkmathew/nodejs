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
