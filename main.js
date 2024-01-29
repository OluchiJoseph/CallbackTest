//const ress = require('./sub')

const http = require('http');
//var http = require('http');

http.createServer(function(req,res){
 res.end("Hello User") //it terminates the process(i.e the response sent)
 console.log("no console")

}).listen(5555, function(){
    console.log("server has started")
});

//ress.f1();
//ress.f2();

//node modules
//http, url, querystring, path, fs, util 

