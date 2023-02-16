const http = require('http');
http.createServer((req, resp) => {
  resp.writeHead(200, { 'Content-Type': 'application\json' });
  resp.write(JSON.stringify({ name: 'Shekhar', email: 'abc@gmail.com' }));
  resp.end();
}).listen(5000);


//use this link - https://Nodejs-practice.chandrashekha42.repl.co

