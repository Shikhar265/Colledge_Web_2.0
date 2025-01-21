let experss=require('express');
let app=experss();

let bodyparser=require('body-parser');

let path=require('path');
app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

app.use(bodyparser.urlencoded({extended:true}));

app.get('/login',(req,res)=>{
    res.render('index');
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('data reciered succsfully...')
})

app.listen(3000,()=>{
    console.log(("app is running on port 3000"));
    
})