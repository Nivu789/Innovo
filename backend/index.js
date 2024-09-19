const express = require('express')
const userRoute = require('./routes/userRoute')
const app = express()
const cors = require('cors')
require('dotenv').config();
const dbConnect = require('./db/dbConnect')


app.use(cors())
app.use(express.json())

dbConnect()
app.use('/user',userRoute)

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(3000,()=>{
    console.log("Server running")
})