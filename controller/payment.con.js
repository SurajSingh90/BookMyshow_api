const Payments = require('../model/payment')
const Bookings = require('../model/Booking')
const constants = require("../util/constant");



exports.createNewPayment = async (req, res) => {
    const savebooking = await Bookings.findById({_id:req.body.bookingId});
    console.log(savebooking)
    if (savebooking) {
      const bookingtime = savebooking.createdAt;
      const paymentTime = Date.now();
  
      const minutes = Math.floor(((paymentTime - bookingtime) / 1000) / 60);
      if (minutes > 2) {
        savebooking.status = constants.bookingStatus.expired;
        await savebooking.save();
        res.status(401).send({ message: "Cant do payment as booking is delayed and expired" });
      }
      const razorpayAPIReponse={
        paymentStatus:constants.paymentStatus.success
      }
      const paymentobject ={
        bookingId:req.body.bookingId,
        amount:savebooking.totalCost,
        status:razorpayAPIReponse.paymentStatus
      }
      try{
        const payment = await Payments.create(paymentobject)
        savebooking.status = (paymentobject.status === constants.paymentStatus.success)?
        constants.bookingStatus.completed:constants.bookingStatus.cancelled
        await savebooking.save();

        return res.status(201).send(payment);
            

      }catch(err){
        res.status(500).send({message:"Internal Server error!",err});
        console.log("error is  " , err)
     }

    } 
    else {
      res.status(404).send({ message: "Booking not found" });
    }
}


   
