const express = require('express');
const routes = express.Router();
const {CreateTheather,getalltheather,getbyidtheather,
      updatetheather,addmovieinsidetheather,checkIfMovieRunningInTheatre} = require('../controller/theather')

const {verifytoken} = require('../middleware/auth')
routes.post("/api/therater/",CreateTheather);
routes.get("/api/alltheather/",[verifytoken],getalltheather)
routes.get("/api/alltheathe/witid/:id",getbyidtheather)
routes.put('/api/v1/updatetheather/:id',updatetheather)
routes.put("/api/alltheather/movieintheather/:id",addmovieinsidetheather)
routes.get("/api/alltheathe/witid/:id/movies/:id",checkIfMovieRunningInTheatre)


module.exports ={   
    theatherroutes:routes
}