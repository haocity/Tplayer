require('./config.js');
var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var c=JSON.stringify(url.parse(req.url, true));
    var e=JSON.parse(c).pathname;
    console.log(e);
    if (parseInt(e)) {
     	 connection.query('SELECT * FROM `'+parseInt(e)+'`', function(err, rows, fields) {
 		 if (err) throw err;
 		  var i=0;
 		  i++
		  var d= rows;
		  res.end('{"success":1,"data":'+JSON.stringify(d)+'}');
		});
    }else{
    	res.end('{"success":0,"data":[{"id":0,"time":10,"text":"链接弹幕失败￣□￣｜｜","color":"#fff","place":1}]}');
    }
}).listen(5221);
