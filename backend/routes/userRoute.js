const express = require('express')
const userController = require('../controllers/userController')
const userRoute = express.Router()

userRoute.post('/post-email',userController.sendEmail)

userRoute.post('/fetch-content',userController.fetchUiContent)

module.exports = userRoute