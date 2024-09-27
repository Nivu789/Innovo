const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    category:{
        type:String, 
    },
    date:{
        type:Date
    },
    heading:{
        type:String,
        required:[true,"heading is required"]
    },
    content:{
        type:String
    },
    image:{
        type:String
    }
})

const NEWS = mongoose.model('news',newsSchema)

module.exports = NEWS