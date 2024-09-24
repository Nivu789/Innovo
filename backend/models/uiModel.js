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
    }
})


const uiSchema = mongoose.Schema({
    pageName:{
        type:String
    },
    sectionId:{
        type:Number
    },
    items:[uiItemSchema]
})



const UI = mongoose.model('ui',uiSchema)

module.exports = UI