const http = require('http');
const server = http.createServer((req,res)=>{
  if (req.url = './'){
    res.write('This is root file called.')
  }
  if (req.url = './api/courses'){
    res.write('List of courses', JSON.stringify(['BCA','MCA','MBA']));
  }
});
/*server.on('connection',(socket)=>{
  console.log('New connection');
});*/
server.listen(3000);
console.log('listening on port 3000');
