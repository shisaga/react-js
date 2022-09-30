//  we use node js form mideable module  for file upload
//  there is a very good module for workin with file uploads ,called 'Formidable'
//  this module can be  downloaded and installed unsing  NPM



//  var http = require('http');
//  http.createServer((req,res)=>{
//      res.writeHead(200,{'content-type':'text/html'});
//      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//      res.write('<input type="file" name="filetoupload"><br>');
//      res.write('<input type="submit">');
//      res.write('</form>');
//      return res.end();
//  }).listen(900);



 // step 2 parse the uplaaded file 


var http =  require('http');
const formidable = require('formidable');
var fs = require('fs')
http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = 'C:/Users/15277/Downloads/' + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
         
          res.write('File uploaded and moved!');
          res.end();
        });
   });
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(8080);








