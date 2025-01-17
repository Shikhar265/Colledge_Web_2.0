let express=require('express');
let app=express();
let port =3333;

let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

app.get('/login',(req,res)=>{
    console.log(req.query);
    res.render('index');
    // res.send('this is a log in page')
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});