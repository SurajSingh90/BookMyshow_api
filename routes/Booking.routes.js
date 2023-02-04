const express = require('express');
const routes = express.Router()
const {createBooking,getBookingById} = require('../controller/booking.controller')
const {verifytoken} = require('../middleware/auth')
routes.post('/api/bookingcreate/',[verifytoken],createBooking)
routes.get('/api/getallbooking/',getBookingById)


module.exports={
    bookingroute:routes
}