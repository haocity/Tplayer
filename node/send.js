require('./config.js');
var http = require('http');
var querystring = require('querystring');
http.createServer(function (req, res) {
  try{
    var body = "";
    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', function () {
      // 解析参数
      var p = querystring.parse(body);
      // 设置响应头部信息及编码
      res.writeHead(200, {'Content-Type': 'application/json; charset=utf8','Access-Control-Allow-Origin':'*'});
      var now=new Date();
      var time=1900+now.getYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
      if(p.id&&p.time&&p.text&&p.color&&p.place) { // 输出提交的数据
          db.query("INSERT INTO `danmu`.`"+parseInt(p.id)+"` (`id`, `time`, `text`, `color`, `place`) VALUES (NULL, "+db.escape(p.time)+", "+db.escape(p.text)+", "+db.escape(p.color)+", "+db.escape(p.place)+")", function(err, rows, fields) {
          if(err){
              res.end(`{"success":0,"container":"发送失败,可能没有找到弹幕库","time":"${time}"}`);
            }else{
              res.end(`{"success":1,"container":"发送成功","time":"${time}"}`);
            }

          })
          //INSERT INTO `danmu`.`p.id` (`id`, `time`, `text`, `color`, `place`) VALUES (NULL, '3', '测试', '#eee', '1');
      } else {  
          res.end(`{"success":0,"container":"请求参数错误","time":"${time}"}`);
      }
      
    });
  }
  catch(error)
  {
    console.log('发生错误了'+eero)
    res.end(`{"success":0,"container":"未知错误","time":"${time}"}`);
  }
}).listen(5220);