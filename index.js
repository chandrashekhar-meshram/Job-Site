
//const fs = require('fs');
const http = require('http');

http.createServer((req, resp) => {
  resp.write("test hhtp module");
  resp.end();
}).listen(4500);