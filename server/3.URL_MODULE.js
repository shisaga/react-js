// var http = require('http');
// var dt = require('./2.myfirstmodule');
// var  url = require('url');// importing module url

// http.createServer(( req, res)=>{
//     res.writeHead(200,{'Content-type':'text/html'});
//     // res.write("the date and time are currently:"+ dt.mydateTime())
//     var q= url.parse(req.url,true).query;
//     var txt = q.year +" " + q.month;// it will show the extracted data  fromt  the url which like year and month ( eg 2018  july)
//     res.write(req.url); // it will write data on the html page
//     res.end(txt);

// }).listen(8080);4


//  var url = require('url');
//  var address ='https://www.google.com/search?q=aldksjfa&rlz=1C1RXQR_enIN1007IN1007&oq=aldksjfa&aqs=chrome..69i57j69i59j69i60l6.599j0j7&sourceid=chrome&ie=UTF-8'
// var q = url.parse(address,true)
// // console.log(q)
// // console.log(q.path);
// // console.log(q.host);
// // console.log(q.search);
// console.log(q.query);




 var file = require('fs') 
 var http = require('http')
 var url = require('url')

 http.createServer((req,res)=>{
    var q = url.parse(req.url,true);
    var filename= '.' +q.pathname;
    console.log(filename)
    file.readFile(filename,(err,data)=>{
        if(err){
         res.writeHead(404,{'Content-type':'text/html'});
         return res.end ('404 not found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();

    });
   
 }).listen(8080)