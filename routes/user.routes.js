const express = require('express')
const routes = express.Router();
const {signup,login,UpdatePassword,updateUser} = require('../controller/user.contoller')
routes.post('/api/v1/signup',signup)
routes.post('/api/v1/login',login)
routes.post('/api/v1/updatepassword/:userId',UpdatePassword)
routes.post('/api/v1/updatepassword/:userId',updateUser)

module.exports ={
    authroutes :routes
}