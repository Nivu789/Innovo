const express = require('express')
const userController = require('../controllers/userController')
const userRoute = express.Router()

userRoute.post('/post-email',userController.sendEmail)

module.exports = userRoute