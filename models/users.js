const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: Boolean,
        default: false,
    },
    created:{
        type:Date,
        required:true,
        default:Date.now
    }
})

module.exports=mongoose.model("User",Schema)