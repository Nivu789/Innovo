const express = require('express')
const adminRoute = express.Router()
const adminFunctions = require('../controllers/adminController')
const adminMiddleWare = require('../middlewares/adminAuth')


adminRoute.post('/admin-login',adminFunctions.adminLogin)

adminRoute.get('/get-contacts',adminFunctions.getContacts)

adminRoute.get('/auth',adminMiddleWare.adminAuth)

module.exports = adminRoute
