// const { find } = require('../model/movie')

const Theather = require('../model/theather')
const Movie = require('../model/movie')

exports.CreateTheather = async(req,res)=>{
    const objectcreate = {
        name:req.body.name,
        description:req.body.description,
        city:req.body.city, 
        pincode:req.body.pincode,
        // movies:req.body.movies
    }
    const result =  await Theather.create(objectcreate)
    res.send(result)
}

exports.getalltheather = async(req,res)=>{
    try{
        const objquery = {}
        if(req.query.city != undefined ){
            objquery.city = req.query.city
        }
        if(req.query.pincode!=undefined){
            objquery.pincode = req.query.pincode
        }
        const result = await Theather.find(objquery)
        res.send(result)
    }catch(err){
        res.status(404).send({msg:"internal error",err})
        console.log(err)
    }
}
exports.getbyidtheather = async(req,res)=>{
    const idresult = await Theather.findById({_id:req.params.id})
    if (!idresult) {
        res.send({ message: "id not found" });
      }
      try {
        const result = await Theather.find();
        res.send(result);
      } catch (err) {
        res.status(400).send({ message: "internal error" });
        console.error(err);
      }
}

exports.updatetheather = async(req,res)=>{
      try{
        const savedTheatre = await Theather.findById({_id:req.params.id})
        if(!savedTheatre){
            res.send({ message: "id not found" });
        }
        savedTheatre.name = req.body.name?req.body.name:savedTheatre.name;
        savedTheatre.city = req.body.city?req.body.city:savedTheatre.city;
        savedTheatre.pincode = req.body.pincode?req.body.pincode:savedTheatre.pincode;
        
        const updateTheatre = await savedTheatre.save()
        res.send(updateTheatre)

      }catch (err) {
        res.status(400).send({ message: "internal error",err });
        console.error("Error is  ",err);
      }
}

exports.addmovieinsidetheather = async(req,res)=>{
   
  try{
    const savedatatheather = await Theather.findOne({_id:req.params.id})
    if(!savedatatheather){
      return res.status(400).send({message:"Theatre doesn't exists"});
   }
    const addmovies = req.body.movies

    if(req.body.insert = true){
      addmovies.forEach(addmovies => {
        savedatatheather.movies.push(addmovies)
        
      });
      
    }
    else if(req.body.delete = true){
        savemoviIds = savedatatheather.movies.filter((movieids)=>{
          return !movieids.includes(movieids.toString())
        })
        savedatatheather.movies = savemoviIds
    }
    
     
    console.log("this is addmoviesvar ",addmovies)
    const updatetheatherdata = await savedatatheather.save()
   
    res.status(200).send({message:"movie successfully added ",updatetheatherdata})
   }catch (err) {
    res.status(400).send({ message: "internal error",err });
    console.error("Error is  ", err);
  }

}
exports.checkIfMovieRunningInTheatre = async(req,res)=>{
  // const {theatreId, movieId} = req.params;

    try{
      const savedTheatre = await Theather.findOne({_id:req.params.id});
      console.log(savedTheatre)

     const savedMovie = await Movie.findOne({_id:req.params.id});

    if(!savedTheatre){
        res.status(400).send({message:"Invalid Theatre Id"});
    }

    if(!savedMovie){
        res.status(400).send({message:"Invalid Movie Id"});
    }
    const response = {
      message:savedTheatre.movies.includes(savedMovie._id)?"Movies is Presents":"Movies Not present"
    }
    res.status(200).send(response)
    }catch (err) {
      res.status(400).send({ message: "internal error",err });
      console.error("Error is  ", err);
    }
}





