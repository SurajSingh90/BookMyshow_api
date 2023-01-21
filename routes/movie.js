const express = require('express');
const routes = express.Router()
const {createmovie} = require('../controller/movie')
routes.post("api/movie/", createmovie)


module.exports ={
    movieroute:routes 
}