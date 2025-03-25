const {mongoose}=require("mongoose");

let user=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    }
})
let User=mongoose.model('User',user);
module.exports=User;

