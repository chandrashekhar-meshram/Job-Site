// run `node index.js` in the terminal

const app = require('./app');
//console.log(app.x);

//console.log(`Hello Node.js v${process.versions.node}!`);

const arr = [2,4,7,1,3,8,3];

let result = arr.filter((item) => {
  return item >= 4;
})

console.log(result);

