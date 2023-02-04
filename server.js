const express = require('express')

// const serverconfig = require('./config/server.config')
const mongoose = require('mongoose') 
const {movieroute,theatherroutes,authroutes,bookingroute,paymentroutes} = require('./routes') 
const app = express()
app.use(express.json()) 

app.use(movieroute) 
app.use(theatherroutes) 
app.use(authroutes)
app.use(bookingroute)
app.use(paymentroutes)
app.get('/',(req, res)=>{  
    res.send("api workss")
}) 
mongoose.connect("mongodb://localhost:/bookbyshow",()=>{
    
    console.log("connected to mongodb")
}) 
app.listen(3500,()=>{ 
    console.log("application running on part ")
})