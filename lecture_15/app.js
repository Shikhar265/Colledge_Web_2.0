let express=require('express');
let app=express();

let path=require('path');

let User=require('./model/user');

let bcrypt =require('bcrypt');

const { mongoose } = require('mongoose');
const { name } = require('ejs');

app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

app.use(express.urlencoded({extended:true}));

let passport=require('passport');

app.use(require('express-sssion')//to let the use loged in even after a relode
({
    secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
let LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (User.password!=Password) { return done(null, false); }
        return done(null, user);
      });
    }
  ));


async function connectdb()
{
    mongoose.connect('mongodb://127.0.0.1:27017/3AH-auth');
    console.log("connected to db");
    
}
connectdb();

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',async(req,res)=>{
    let{Uname,password,mail}=req.body;
    let hashpassword=await bcrypt.hash(password,8);
    let u1=new User({
        name:Uname,
        password:hashpassword,
        email:mail
    });
    await u1.save();
    res.send('user regestered succesfully !!');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',async(req,res)=>{
    let{name_log,pass_log}=req.body;
    let user1=await User.findOne({name:name_log});
    console.log(user1);
    if(!user1)
    {
        return res.send("Invalid User");
    }
    if(await bcrypt.compare(pass_log,user1.password))
    {
        res.send(`welcom ${name_log}`);
    }
    else
    {
        res.send("Invallid User");
    }
    // res.send(user1);
})

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})