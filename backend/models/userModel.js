const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const USER = mongoose.model('user',userSchema)

module.exports = USER