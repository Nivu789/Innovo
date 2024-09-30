const express = require('express')
const adminRoute = express.Router()
const adminFunctions = require('../controllers/adminController')
const adminMiddleWare = require('../middlewares/adminAuth')
const UiUpload = require('../middlewares/multer')


adminRoute.post('/admin-login',adminFunctions.adminLogin)

adminRoute.get('/get-contacts',adminFunctions.getContacts)

adminRoute.get('/auth',adminMiddleWare.adminAuth)

adminRoute.post('/get-ui-components',adminFunctions.getUiComponents)

adminRoute.post('/edit-ui', UiUpload.upload.single('image'),adminFunctions.uploadUiImage,adminFunctions.editUiComponent);

adminRoute.post('/get-ui-section-components',adminFunctions.getUiSections)

adminRoute.post('/add-ui-component',UiUpload.upload.single('image'),adminFunctions.uploadUiImage,adminFunctions.addUiComponent)

adminRoute.post('/delete-ui-component',adminFunctions.deleteUiComponent)

adminRoute.post('/rearrange-section-elements',adminFunctions.rearrangeUiComponent)

adminRoute.post('/add-news',UiUpload.upload.single('image'),adminFunctions.uploadUiImage,adminFunctions.addNews)

adminRoute.get('/get-news-data',adminFunctions.getNewsData)

adminRoute.post('/get-indi-news-data',adminFunctions.getIndiNewsData)

adminRoute.post('/edit-news',UiUpload.upload.single('image'),adminFunctions.editNews)

adminRoute.post('/delete-news',adminFunctions.deleteNews)

adminRoute.post('/add-category',adminFunctions.addCategory)

adminRoute.get('/get-category',adminFunctions.getCategories)

module.exports = adminRoute
