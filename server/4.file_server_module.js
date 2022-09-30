//  the node.js  file sytem module allow you to work with  the file system on you computer
// to  include the file Syste module, use the require() method:


//  common use of this module is to 
// creat file:= fs. appendFile(),fs.open(),fs.writeFile are use to creat file
// Read file := fs.readFile() it is use to read the file on  your computer
// update file:= fs.appendFile(),fs.writeFile() are use to update file
// delete files:= fs.unlink() is   to delete a file  system module,
// Rename files:= fs.rename() is rename a file  system moduel
//  var http = require('http');
// var  filesystem = require('fs');
// http.createServer((req,res)=>{
//     fs.readFile('test.html',(err,data)=>{
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write(data)
//         return res.end();
//     })


// // }).listen(8080);




//for creating fiel
//  var filesystem = require('fs');
//  filesystem.appendFile('mynewfile.txt',"hello my nam is shiv sagar",(err)=>{
//  if (err) {
//     throw err;



//  }// this fs.append file (  method appends secificed contedt to f)
//  console.log('console')
//  })



const { throws } = require('assert');
// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {/// hear w is  the flage ` w mean  that its is present for writing

//   if (err) throw err;
//   console.log('Saved!');
// });



var fs3 = require("fs");
fs3.writeFile('mynewfile.txt','helo',( err)=>{
    if(err) throw err;
    console.log('saved!');///fs.writfile  method replace the specified file and content if tit exists. if the file does not exist , a new file , constining the specified content, will be created:


});



// for updateing file
// update file method //
var file_system= require('fs');

file_system.appendFile('mynewfiel.txt','this is my  hello budddy name is text',(err)=>{
    if(err) throw err;
    console.log('update');

});
 
file_system.appendFile('mynewfiel.txt' ,' hello shiv',()=>{
    console.log("nothing")

})

file_system.writeFile('mynewfiel.txt','let name something ',(err)=>{
    if(err) throw err;
    console.log('replaced');
})



//delet file with the file system modul  to delet fiel  we  use fs.unlink method 
// / the fs.unlink  method delets the specified file

var file = require('fs');
file.unlink('mynewfiel.txt',(err)=>{
    if (err) throw err;
    console.log('file deleted');

});

//fs.rename() method rename  the specified file:

var fs= require('fs');

fs.rename('mynewfile.txt','shiv.txt',()=>{
   console.log('file is rename as shiv.txt')
})





