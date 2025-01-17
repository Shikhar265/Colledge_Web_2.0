// normal code

let fs = require('fs');
let path = __dirname + '/dat.txt';
fs.appendFile(path, "\nlearning node.js and appending some data in it", (err) => {
  if (err) {
    console.error('Error writing to file:', err)
  }
  else {
    console.log("file created")
  }
});

// append code

let fs1 = require('fs/promises');
let path1 = __dirname + '/dat.txt';
 
fs1.appendFile(path, "\nThis line is added through promise code")
.then(()=>{
  console.log("file appended successfully.....");
})
.catch((err)=>{
  console.error (err);
});