const Movie = require('../model/movie')
exports.createmovie = async(req,res)=>{
    try{
        const movieObject = {
            name: req.body.name,
            description: req.body.description,
            casts: req.body.casts,
            director: req.body.director,
            trailerUrl: req.body.trailerUrl,
            posterUrl: req.body.posterUrl,
            language: req.body.language,
            releaseDate: req.body.releaseDate,
            releaseSatus: req.body.releaseSatus
        }
        const result = await Movie.create(movieObject)
        res.status(201).send(result);
    }catch(err){
        res.status(401).send({msg:"internal error",err})
        console.log(err)
    }
    
}