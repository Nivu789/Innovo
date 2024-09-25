const EMAIL = require("../models/emailModel")
const UI = require("../models/uiModel")
const USER = require("../models/userModel")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

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
       const {heading,description,parentId,uniqueId} = req.body
       console.log(heading)
       console.log("ObjectId",parentId)
       console.log("UniqueId",uniqueId)
       const parsedParentId = new mongoose.Types.ObjectId(parentId)
       const parentDocument = await UI.findById({_id:parsedParentId});

       const itemToUpdate = parentDocument.items.find((item)=>item.uniqueId==uniqueId)

       if(req.file){
            itemToUpdate.heading = heading
            itemToUpdate.description = description
            itemToUpdate.image = req.file.path
       }else{
            itemToUpdate.heading = heading
            itemToUpdate.description = description
       }

       const updateUi = await parentDocument.save()
       
       if(updateUi){
        return res.json({success:true,message:"Updated UI successfully"})
       }else{
        return res.json({success:false,message:"Error - Changes not saved"})
       }

    } catch (error) {
        console.log(error)
    }
}

const getUiSections = async(req,res) =>{
    try {
        const {pageName,sectionId} = req.body
        const data = await UI.find({$and:
            [
                {pageName},
                {sectionId}
            ]})
        
            if(data){
                return res.json({success:true,data})
            }

            return res.json({success:false})
            
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    adminLogin,
    getContacts,
    getUiComponents,
    uploadUiImage,
    editUiComponent,
    getUiSections
}