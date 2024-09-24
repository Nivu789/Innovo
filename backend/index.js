const express = require('express')
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const app = express()
const path = require('path')
const cors = require('cors')
require('dotenv').config();
const cookieParser = require('cookie-parser')
const dbConnect = require('./db/dbConnect')

app.use(cors({
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

dbConnect()
app.use('/user',userRoute)
app.use('/admin',adminRoute)

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(3000,()=>{
    console.log("Server running")
})