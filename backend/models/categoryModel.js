const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    categoryName:{
        type:String
    }
})

const CATEGORY = mongoose.model('category',categorySchema)

module.exports = CATEGORY