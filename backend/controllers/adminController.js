const EMAIL = require("../models/emailModel")
const USER = require("../models/userModel")
const jwt = require('jsonwebtoken')

const adminLogin = async(req,res) =>{
    try {
       const {username,password} = req.body
       const user = await USER.findOne({username})
       
       if(user && user.isAdmin){
            if(user.password==password){
                const token = jwt.sign({user},process.env.JWT_SECRET,{expiresIn:'1d'})
            
                
                return res.json({success:true,message:"Login successfull",token})
            }else{
                return res.json({success:false,message:"Credentials mismatch"})
            }    
       }

       return res.json({sucess:false,message:"Login failed"})

    } catch (error) {
        console.log(error)
    }
}


const getContacts = async(req,res) =>{
    try {
        const messages = await EMAIL.find({})
        if(messages){
            return res.json({success:true,messages})
        }else{
            return res.json({success:false})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    adminLogin,
    getContacts
}