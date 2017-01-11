require('./config.js');
var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf8','Access-Control-Allow-Origin':'*'});
    var getobj=querystring.parse(url.parse(req.url).query);
   try{
      if (getobj.id) {
           db.query('SELECT * FROM `'+parseInt(getobj.id)+'`', function(err, rows, fields) {
           if (err){
              res.end('{"success":0,"data":[{"id":0,"time":10,"text":"链接弹幕失败￣□￣｜｜","color":"#fff","place":1}]}');
            }
            var i=0;
            i++
            var d= rows;
            res.end('{"success":1,"data":'+JSON.stringify(d)+'}');
          });
      }else{
          res.end('{"success":0,"data":[{"id":0,"time":10,"text":"链接弹幕失败￣□￣｜｜","color":"#fff","place":1}]}');
      }
    }
    catch(error){
      console.log('发生错误了'+eero)
      res.end('{"success":0,"data":[{"id":0,"time":10,"text":"链接弹幕失败￣□￣｜｜","color":"#fff","place":1}]}');
    }
}).listen(5221);
