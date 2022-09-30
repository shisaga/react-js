var http = require('http');
var dt = require('./2.myfirstmodule');
var  url = require('url');

http.createServer(( req, res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    // res.write("the date and time are currently:"+ dt.mydateTime())
    var q= url.parse(req.url,true).query;
    var txt = q.year +" " + q.month;// it will show the extracted data  fromt  the url which like year and month ( eg 2018  july)
    // res.write(req.ur);
    res.end(txt);

}).listen(8080);