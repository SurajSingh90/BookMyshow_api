const jwt = require('jsonwebtoken')
const config = require('../config/auth')
const users = require('../model/User')
const constraint = require('../util/constant')
const verifytoken = (req,res,next)=>{
    const token = req.headers['x-access-token']
    try{
        if(!token){
            return res.status(403).send({message:"No Token Provided"});
        }
        jwt.verify(token,config.secret,(err,decoded)=>{
            if(err){
                res.status(401).send({message:"Unauthorized!"});
            }
            req.userId = decoded.id
            next()
        }) 
    }catch(err){
        res.status(401).send({message:" internal error ",err})
        console.log("the Error is ", err)
    }
   
}
const isadmin = async(req,res,next)=>{
    const user = await users.findOne({userId:req.userId})
    // console.log(user)
    if(user && user.userTypes === constraint.userTypes.admin ){
        next()
    } 
    else {
        res.status(403).send({
            message: "Require Admin Role!"
        })
        
    }

}
module.exports={
    verifytoken,
    isadmin
}
