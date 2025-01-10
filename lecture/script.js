let fs=require('fs');


let path=__dirname+'/data.txt';
console.log(path);
fs.writeFile(path,"learning node js file System",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("file created ...........");
    }
})