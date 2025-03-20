let express=require('express');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set(path.join(--dirname,'views'));
app.use(express.urlencoded({extended:true}));


app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',(req,res)=>{
    let{Uname,password,mail}=req.body;
    
})
app.listen(3000,()=>{
    console.log("app is running at port 3000");
})