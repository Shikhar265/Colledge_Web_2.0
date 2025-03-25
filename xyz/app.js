const fs=require('fs');
fs.openSync('text.txt','r+')
console.log("sucks");

// fs.writeFileSync('text.txt',"sucks");
// const data=fs.readFileSync('text.txt','utf8');
// console.log(data);

// console.log("sucks again");

fs.readFile('text.txt','utf8',(err,text)=>
{
    console.log(text);
    
});

console.log("sucks again");