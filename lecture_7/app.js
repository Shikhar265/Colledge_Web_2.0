let express=require('express');
let app=express();
let path=require('path');
app.use(express.json());
app.set('view engine','ejs');
app.set(path.join(__dirname,"views"));
let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended :true}))

let blogs=[
    {
        id:1,
        title:"first blog",
        url:"https://plus.unsplash.com/premium_photo-1737836420070-e3ee9611d50c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"forest night stars nature forest at night"
    },
    {
        id:2,
        title:"second blog",
        url:"https://plus.unsplash.com/premium_photo-1736451320089-e3fcb0430cb3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"starry sky night photography Free pictures"
    }
]

app.get('/blogs',(req,res)=>{
    res.render('index',{blogs});
})

app.get('/blog/new',(req,res)=>{
    res.render('new');
})

app.post('/blogs',(req,res)=>{
    let {title,desc,url}=req.body;
    console.log(req.body);
    blogs.push({
        id:3,
        title:title,
        url:url,
        desc:desc
    })
    res.redirect('/blogs');
    // res.send('data added successfully')
})


// to show single blog
app.get('/blog/:blog_id',(req,res)=>{
    console.log(typeof(req.params.blog_id));
    let blog1=blogs.find((blog)=>{
        console.log(blog.id);
        return blog.id==req.params.blog_id
    })
        
    console.log(blog1);
    res.send("data recieved")
    // res.render('show',{blog});
})

app.listen(3333,()=>{
    console.log("app  is running at Port 3333");
});