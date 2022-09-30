// var fs = require('fs');
//  var rs = fs.createReadStream('mynewfile2.txt');
//  rs.on('open',()=> console.log('file is opened'));

// var http = require('http');
// var file = require('fs')
//  var re =http.createServer(async (req,res)=>{
//       file.readFile('test2.html',(err,data)=>{
//          res.writeHead(200,{'Content-type':'text/html'});
//          res.write(data);
         
         
//          res.end();
//       })
//  }).listen(800)
//  console.log('h')
// re.on('connect',(strem)=>{
//     console.log("connected to server"+ strem);
// })
// console.log('h')\\




//  node has its own inbuilt module  for event 

// 

var event = require('events');
var eventEmiter = new event.EventEmitter();

var myeventHndeler = function (){
     console.log('I hear a scream!');

}

eventEmiter.on('scream ',myeventHndeler);

eventEmiter.emit()


