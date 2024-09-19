const mongoose = require('mongoose')

const dbConnect = async() =>{
    try {
         await mongoose.connect(process.env.MONGO_URI)
         console.log("Databse connected")
    } catch (error) {
        console.log(error)
        console.log("Failed to connect database")
    }
}

module.exports = dbConnect