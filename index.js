//create file
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

//fs.writeFileSync(filePath, 'this is curd file');

// fs.readFile(filePath, 'utf8', (err, item) => {
//   console.log(item);
// });

//o/p - this is curd file

//update file
fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
  if(!err) {
    console.log("file is updated");
  }
})

// op - file is updated with text added in apple.txt

