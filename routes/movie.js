const express = require('express');
const routes = express.Router()
const {createmovie,moviebynames,getMovie,updateMovie, deleteMovie} = require('../controller/movie')
// const {isadmin,verifytoken} = require('../middleware/auth')
routes.post("/movie/api/createmovie/",createmovie)
routes.get("/movie/api/v1/moviebyname/",moviebynames)
routes.get("/movie/api/Getemoviebyid/:id", getMovie)
routes.put("/movie/api/updatemovie", updateMovie)
routes.delete("/movie/api/deletemovie/:id", deleteMovie)


module.exports ={
    movieroute:routes 
}