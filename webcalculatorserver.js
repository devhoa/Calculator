var dt = require('./mymodule.js');
console.log(dt.calc(40,20,'/'));
const http = require('http');

//load module (software library) url
const url = require('url')
//const hostname = 'localhost';
const port = process.env.PORT; 3000
const server = http.createServer((req,res) => {
				res.statusCode = 200;
				res.setHeader('Content-Type','text/html');
				console.log(req.url);
				//request URL: http://localhost:3000/?a=...&b=...&p=...
				//1.Read params a,b and p and convert them (a,b) to numbers

				var q = url.parse(req.url,true);
				//console.log('hostname: ' + q.host); //localhost:3000
				//console.log('pathname: ' + q.pathname);// empty
				//console.log('param string: ' + q.search);//?a=20&b=10&p=%2F

				var qparams = q.query;
				console.log(qparams);//{a:'20',b:'10',p:'/'}

				//2.Use module mymodule.js to call calc(a,b,p) function
				var result = dt.calc(qparams.a,qparams.b,qparams.p);

				//3.Respond the result to the client
				res.end(`<!DOCTYPE html>
						<html lang="en">
						 <head>
						  <title>A simple web calculator</title>
						 </head>
						 <body>
							<h1>Welcome to a simple calculator</h1>
							<h2>Please input value a, value b and operator p</h2>
							<form action='http://localhost:3000' method='get'>
								<p>
									<label>a</label><input name=a value=${qparams.a}>
								</p>
								<p>
									<label>b</label><input name=b value=${qparams.b}>
								</p>
								<p>
									<label>p</label><input name=p value=${qparams.p}> 
								</p>
								<p>
									<input type='submit' value='Calculate Now'>
								</p>
							</form>
							<label>result</label><input value=${result}>
						 </body>
						</html>`);
				//res.end(`The result is ${qparams.a}${qparams.p}${qparams.b} = ` + result);
				});
server.listen(port,() => {
	console.log(`App is running on ${port}/`);
});