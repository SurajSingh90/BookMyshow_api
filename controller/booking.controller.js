const Booking = require("../model/Booking");
const User = require("../model/User");
const constants = require("../util/constant");

exports.createBooking = async (req,res)=>{

    // const user= await User.findOne({
    //     userId:req.userId
    // })


    const bookingObj={
        theatreId:req.body.theatreId,
        movieId:req.body.movieId,
        // userId:user._id,
        timing:req.body.timing,
        noOfSeats:req.body.noOfSeats,
        totalCost: req.body.noOfSeats * 250
    };

    try{
    const booking = await Booking.create(bookingObj);
    res.status(201).send(booking);
    }
    catch(err){
        res.status(500).send({message:"Internal server Error! "+ err.message})
    }
}

exports.getBookingById = async (req,res)=>{

    try{
        const bookings= await Booking.findOne({_id:req.params.id});
        res.status(200).send(bookings);
    }catch(err){
        res.status(500).send({message:"Internal Server Error"});
    }
}



exports.updateBooking = async (req,res)=>{


    const savedBooking = await Booking.findOne({
        _id:req.params.id
    });

    if(!savedBooking){
        return res.status(400).send("Invalid Booking Id");
    }

    savedBooking.theatreId = req.body.theatreId ? req.body.theatreId : savedBooking.theatreId;
    savedBooking.movieId = req.body.movieId ? req.body.movieId : savedBooking.movieId;
    savedBooking.userId = req.body.userId ? req.body.userId : savedBooking.userId;
    savedBooking.timing = req.body.timing ? req.body.timing : savedBooking.timing;
    savedBooking.noOfSeats = req.body.noOfSeats ? req.body.noOfSeats : savedBooking.noOfSeats;
    savedBooking.totalCost = savedBooking.noOfSeats * constants.ticketPrice;
    savedBooking.status = req.body.status ? req.body.status : savedBooking.status;

    try{
        const updatedBooking = await savedBooking.save();
        res.status(201).send(updatedBooking);
    }
    catch(err){{
        res.status(500).send({message:"Internal Error while updating the booking "+e.message});
    }}

}

