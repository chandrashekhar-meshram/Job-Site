const fs = require('fs');

const input = process.argv;
fs.writeFileSync(input[2], input[3]); 
// command - node index.js apple.txt "this is apple"