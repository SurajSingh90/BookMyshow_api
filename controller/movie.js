const Movie = require("../model/movie");
exports.createmovie = async (req, res) => {
  try {
    const movieObject = {
      name: req.body.name,
      description: req.body.description,
      casts: req.body.casts,
      director: req.body.director,
      trailerUrl: req.body.trailerUrl,
      posterUrl: req.body.posterUrl,
      language: req.body.language,
      releaseDate: req.body.releaseDate,
      releaseSatus: req.body.releaseSatus,
    };
    const result = await Movie.create(movieObject);
    res.status(201).send(result);
  } catch (err) {
    res.status(401).send({ msg: "internal error", err });
    console.log(err);
  }
};

exports.moviebynames = async (req, res) => {
  // const name = req.query.name

  try {
    const query = {};
    if (req.query.name != undefined) {
      query.name = req.query.name;
    }
    const findmovie = await Movie.findOne(query);
    if (!findmovie) {
      res.send({ msg: "moive not found" });
    }
    res.status(200).send(findmovie);
  } catch (err) {
    res.status(401).send({ msg: "internal error", err });
    console.log("Error is  ", err);
  }
};

exports.getMovie = async (req, res) => {
  const movie = await Movie.findOne({
    _id: req.params.id,
  });

  res.status(200).send(movie);
};

exports.updateMovie = async (req,res)=>{

    const id= req.params.id;

    const savedMovie = await Movie.findOne({_id:id});
    
    if(!savedMovie){
        res.status(400).send("Movie to be updated doesn't exists");
    }

    savedMovie.name = req.body.name ? req.body.name : savedMovie.name;
    savedMovie.description = req.body.description ? req.body.description : savedMovie.description;
    savedMovie.casts = req.body.casts ? req.body.casts : savedMovie.casts;
    savedMovie.director = req.body.director ? req.body.director : savedMovie.director;
    savedMovie.trailerUrl = req.body.trailerUrl ? req.body.trailerUrl : savedMovie.trailerUrl;
    savedMovie.posterUrl = req.body.posterUrl ? req.body.posterUrl : savedMovie.posterUrl;
    savedMovie.language = req.body.language ? req.body.language : savedMovie.language;
    savedMovie.releaseDate = req.body.releaseDate ? req.body.releaseDate : savedMovie.releaseDate;
    savedMovie.releaseStatus = req.body.releaseStatus ? req.body.releaseStatus : savedMovie.releaseStatus;

    const updatedMovie = await savedMovie.save();

    res.status(200).send(updatedMovie);
}

exports.deleteMovie = async (req,res)=>{
    const deletebyid = await Movie.findOneAndDelete({_id:req.params.id})
    res.status(200).send({message:`Successfully delete movie with id :${req.params.id}`,deletebyid})
}