var http = require('http'),
fs = require('fs'),
ejs = require('ejs');
var server = http.createServer();
var settings = require('./settings');
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
var n = 0;
server.on('request', function (req, res) {
		 	n++;

	var data = ejs.render(template,{
		title: "hello",
		content: "<strong>world</strong>",
		n: n
	});
	 res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write(data);
  res.end();
console.log(n);
	
});
server.listen(settings.port, settings.host);
console.log("server listening ...");