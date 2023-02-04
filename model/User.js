const mongoose = require("mongoose");
const constant = require('../util/constant')
const UserSchema =  new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true,
        unique:true 
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        lowercase:true,
        minlength:10
    },
    userTypes:{
        type:String,
        require:true,
        default:constant.userTypes.customer
    },
    userStatus:{
        type:String,
        require:true,
        default:"APPROVED"
    }
})

module.exports = mongoose.model("user",UserSchema)