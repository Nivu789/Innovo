const mongoose = require('mongoose')

const uiItemSchema = mongoose.Schema({
    heading:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    uniqueId:{
        type:String,
    }
})


const uiSchema = mongoose.Schema({
    pageName:{
        type:String
    },
    sectionId:{
        type:Number
    },
    items:[uiItemSchema],
    limit:{
        type:Number,
        default:1
    }
})



const UI = mongoose.model('ui',uiSchema)

module.exports = UI