const mongoose = require("mongoose");
const theaterSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    pincode:{
        type:String,
        require:true
    },
    movies:{
        type:[mongoose.SchemaTypes.ObjectId], 
        ref:"MOVIE"
    } 
    
})
module.exports = mongoose.model("theather",theaterSchema)

