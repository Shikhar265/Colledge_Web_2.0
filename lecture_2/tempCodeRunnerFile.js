let fs = require('fs/promises');
let path1 = __dirname + '/dat.txt';
 
fs.appendFile(path, "\nThis line is added through promise code")
.then(()=>{
  console.log("file appended successfully.....");
})
.catch((err)=>{
  console.error (err);
});