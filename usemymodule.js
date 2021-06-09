var dt = require('./mymodule.js');
console.log(dt.calc(40,20,'/'));
const http= require('http');
//load module (library software) url
const url = require('url');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res) => {
				res.statusCode = 200;
				res.setHeader('Content-Type','text/html');
				console.log(req.url);
				//request URL: http://localhost:3000/?a=...&b=...&p=...
				//1.Read params a,b and p and convert them (a,b) to numbers

				var q = url.parse(req.url,true);
				console.log('hostname:' + q.host); //loocalhost:3000
				console.log('pathname:' + q.pathname);//empty
				console.log('param string:' + q.research);

				var qparams = q.query;
				console.log(qparams);
				//2.Use module mymodule.js to call calc(a,b,p) function
				var result = dt.calc(qparams.a,qparams.b,qparams.p);


				//3.Respond the result to the client
				res.end(`The result is ${qparams.a}${qparams.b}${qparams.p} = ` + result);
				});
server.listen(port,hostname,() => {
	console.log(`Server is running at http://${hostname}:${port}/`);
});