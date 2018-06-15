var url = "http://mylogger.io/log"
function log(message){
  //Send an http request
  console.log(message);
}
function sayHello(name){
  //Send an http request
  console.log('Hello ' + name);
}
//module.exports.logging = log;
module.exports.greetings = sayHello;
//module.exports.endPoint = url;
module.exports.log = log;
//module.exports.endPoint = url;
