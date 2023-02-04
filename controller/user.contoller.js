const user = require('../model/User')
const bcrypt = require('bcrypt')
const jwt =  require('jsonwebtoken')
const config = require('../config/auth')
exports.signup = async(req,res)=>{
    const userobj= {
        name:req.body.name,
        userId:req.body.userId,
        email:req.body.email, 
        password:bcrypt.hashSync(req.body.password,8),
        userTypes:req.body.userTypes
    }
    const result = await user.create(userobj)
    res.send(result) 
}  

exports.login = async(req,res)=>{
    try{
        const finduser = await user.findOne({userId:req.body.userId})
        if(!finduser){
            res.send({msg:"UserIdd is not found"})
        }
        const validpassword = bcrypt.compareSync(req.body.password,finduser.password)
        if(!validpassword){
            res.send({msg:"password is not found"})
        } 
        const token = jwt.sign({userId:finduser.userId},config.secret,{
            expiresIn:76000
        })
        res.send({access:token})
    }catch (err) {
        res.status(400).send({ message: "internal error",err });
        console.error("Error is  ",err);
      }
}

exports.UpdatePassword = async(req,res)=>{
    const userId= req.userId;

    if(!req.body.password){
        return res.status(400).send("Password not passed!");
    }

    try{
        const users= await user.findOneAndUpdate({
            userId:userId
        },{
            password:bcrypt.hashSync(req.body.password,10)
        });

        res.status(200).send({message:"Password update successful"});
    }
    catch(err){
        res.status(500).send({message:"Some internal error occured",err});
        console.log(err)
    }
}
exports.updateUser = async (req,res)=>{

    const userId = req.params.userId;
    
    try{
        const user = await user.findOneAndUpdate({
            userId:userId
        },{
            name:req.body.name
        });

        if(!user){
            return res.status(400).send({message:"Invalid User Id"});
        }

        res.status(200).send({message:"User record has been updated successfully"});
    }
    catch(err){
        res.status(500).send({message:"Some internal error occured"});
    }

}
