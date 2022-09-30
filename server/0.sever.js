
// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
// To include the HTTP module, use the require() method:

var http = require('http');
//NOde.js  http module can create server and  listen in that sever 
// creat sever method is use  to creat  http server  
http.createServer(function (req, res) {
    // writeHead is use to set the hearder of response
// if  you want  to display  html contant you shold includ and http header with the correct content type
// the argument of the read writ head : first is stutus code  which 200  mean all is ok , the second argument is an objec containing the response headers.
res.writeHead(200, {'Content-Type': 'text/html'});
//     when someone  trie to accesss the computer on the port 8080
//  this  createserver method will excute 

  res.end('Hello World!');
}).listen(8080);

