const http = require('http');
const data = require('./data');

http.createServer((req, resp) => {
  resp.writeHead(200, { 'Content-Type': 'application\json' });
  resp.write(JSON.stringify(data));
  resp.end();
}).listen(5000);


//use this link - https://Nodejs-practice.chandrashekha42.repl.co

