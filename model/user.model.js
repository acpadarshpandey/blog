const {Schema, model}= require("mongoose");

const userSchema= new Schema({
    email:{
     type:String,
     require:true,
     unique:1,
     trim:true
    },
    password:{
        type:String,
     require:true,
     minlength:6
    }
});
 
 module.exports= model("user",userSchema);