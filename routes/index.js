const {movieroute} = require("./movie")
const {theatherroutes} = require('./theather')
const {authroutes}= require('./user.routes')
const {bookingroute} = require('./Booking.routes')
const {paymentroutes} = require('./payments.route')
module.exports={
    movieroute,
    theatherroutes,
    authroutes,
    bookingroute,
    paymentroutes
}

