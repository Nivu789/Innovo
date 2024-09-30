const express = require('express')
const userController = require('../controllers/userController')
const userRoute = express.Router()

userRoute.post('/post-email',userController.sendEmail)

userRoute.post('/fetch-content',userController.fetchUiContent)

userRoute.post('/get-indi-news',userController.getIndiNews)

userRoute.get('/get-recent-news',userController.getRecentNews)

module.exports = userRoute