var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
mysql = require('mysql');
let dbconfig = {
	host: 'localhost',
	user: 'user',
	password: '****',
	database: 'danmaku'
};
console.log('弹幕服务开启');
http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json; charset=utf8',
		'Access-Control-Allow-Origin': '*'
	});
	var getobj = querystring.parse(url.parse(req.url).query);
	if(getobj.id) {
		db = mysql.createConnection(dbconfig);
		console.log('查询id: ' + getobj.id + '的弹幕');
		db.query('SELECT * FROM `' + parseInt(getobj.id) + '`', function(err, rows, fields) {
			if(err) {
				res.end('{"success":0,"data":[]}');
			}
			res.end('{"success":1,"data":' + JSON.stringify(rows) + '}');
		});
	} else {
		res.end('{"success":0,"data":[{"id":0,"time":10,"text":"请求参数错误￣□￣｜｜","color":"#fff","place":1}]}');
	}
	db.end();
	console.log('关闭连接');
}).listen(5221);

http.createServer(function(req, res) {
	var body = "";
	req.on('data', function(chunk) {
		body += chunk;
	});
	req.on('end', function() {
		// 解析参数
		var p = querystring.parse(body);
		// 设置响应头部信息及编码
		res.writeHead(200, {
			'Content-Type': 'application/json; charset=utf8',
			'Access-Control-Allow-Origin': '*'
		});
		var now = new Date();
		if(p.id && p.time && p.text && p.color && p.place) { // 输出提交的数据
			db = mysql.createConnection(dbconfig);
			let time = new Date();
			db.query('CREATE TABLE IF NOT EXISTS `' + p.id + '` (`id` int(4) NOT NULL AUTO_INCREMENT, `time` int(6) NOT NULL,`text` varchar(200) NOT NULL,`color` varchar(20) NOT NULL,`place` int(1) NOT NULL,PRIMARY KEY (`id`)) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT="Tplayer"');
			var sql = "INSERT INTO `danmaku`.`" + parseInt(p.id) + "` (`id`, `time`, `text`, `color`, `place`) VALUES (NULL, " + db.escape(p.time) + ", " + db.escape(p.text) + ", " + db.escape(p.color) + ", " + db.escape(p.place) + ")";
			console.log(sql);
			db.query(sql, function(err, rows, fields) {
				res.end(`{"success":1,"container":"发送成功","time":"${time}"}`);
				console.log(`发送弹幕完成表:${p.id}内容:${p.text}`)
				db.end();
			})
		} else {
			res.end(`{"success":0,"container":"请求参数错误","time":"${time}"}`);
		}
	})
}).listen(5220);