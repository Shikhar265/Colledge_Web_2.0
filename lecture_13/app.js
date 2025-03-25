let express=require('express');
let app=express();

let Isvalid=(req,res,next)=>{
    let {password}=req.query;
    if(password=="")
        {
            res.send("password can't be empty");
        }
        else if(password!="tus1212")
        {
            res.send('this is not right');
        }
    else
    {
        next();
    }    
}

app.use((req,res,next)=>
{
    console.log("this is a first middleare");
    next()
})

app.use((req,res,next)=>
    {
        console.log("this is a second middleare");
        next();
    })

app.get('/login',Isvalid,(req,res)=>{
    res.send('login route')
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
    
})