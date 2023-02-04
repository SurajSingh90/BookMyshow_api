const express = require('express')
const routes = express.Router()
const {createNewPayment} = require('../controller/payment.con')
routes.post('/api/payments/',createNewPayment)

module.exports={
    paymentroutes:routes
}