const mongoose = require('mongoose')

const emailSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    phone:{
        type:String,
    },
    message:{
        type:String
    }
})

const EMAIL = mongoose.model('email',emailSchema)

module.exports = EMAIL