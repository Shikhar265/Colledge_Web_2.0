let fs=requre('fs/promises');

let path=__dirname+'/dat.txt';

fs.writefile(path,"learning files System using promises")
.then(()=>{
    console.log("done successfully ..........");
})
.catch((err)=>{
    console.log(err);    
})