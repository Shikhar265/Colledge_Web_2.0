let express=require('express');
let app=express();

app.get('/home',(req,res)=>{
    res.send('home route');
})


app.get('/products/data',()=>{
    res.send('this is a product route');
})
// login 
app.get('/login',(req,res)=>{
    res.send('login route');
})

// logout
app.get('/logout',(req,res)=>{
    res.send('logout route');
})

// dashboard
app.get('/dashboard',(req,res)=>{
    res.send('dashboard route');
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
    
})
// http://localhost:3000/