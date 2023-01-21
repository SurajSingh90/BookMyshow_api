const express = require('express')

// const serverconfig = require('./config/server.config')
const mongoose = require('mongoose') 
const {movieroute} = require('./routes') 
const app = express()
app.use(express.json()) 

app.use(movieroute) 
app.get('/',(req, res)=>{ 
    res.send("api workss")
}) 
mongoose.connect("mongodb://localhost:/bookbyshow",()=>{
    
    console.log("connected to mongodb")
}) 
app.listen(4500,()=>{ 
    console.log("application running on part ")
})