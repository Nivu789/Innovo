const EMAIL = require("../models/emailModel")
const UI = require("../models/uiModel")
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


const getUiComponents = async(req,res) =>{
    try {
        const {pageName} = req.body
        const pageData = await UI.find({pageName})
        
        if(pageData){
            res.json({success:true,pageData})
        }

    } catch (error) {
        console.log(error)
    }
}

const uploadUiImage = (req, res,next) =>{
    try {
        if (req.file) {
            console.log(req.file.path)
            next()
        } else {
            next()
        }
    } catch (error) {
        console.log(error)
    }
}

const editUiComponent = async(req,res) =>{
    try {
       const {heading,description,sectionId} = req.body
       let updateUi;
       if(req.file){
            updateUi = await UI.findOneAndUpdate({sectionId},{$set:{heading,description,image:req.file.path}})
       }else{
            updateUi = await UI.findOneAndUpdate({sectionId},{$set:{heading,description}})
       }
       
       if(updateUi){
        return res.json({success:true,message:"Updated UI successfully"})
       }else{
        return res.json({success:false,message:"Error - Changes not saved"})
       }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    adminLogin,
    getContacts,
    getUiComponents,
    uploadUiImage,
    editUiComponent
}