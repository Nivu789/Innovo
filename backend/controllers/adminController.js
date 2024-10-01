const CATEGORY = require("../models/categoryModel.js")
const EMAIL = require("../models/emailModel")
const NEWS = require("../models/newsModel.js")
const UI = require("../models/uiModel.js")
const USER = require("../models/userModel")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

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
        const messages = await EMAIL.find({}).select("-__v -_id",)
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

const addUiComponent = async(req,res) =>{
    try {
       const {heading,description,image,parentId} = req.body
       const parentDoc = await UI.findById({_id:parentId})
       if(parentDoc){
        const limit = parentDoc.limit
        const checkAvailability = parentDoc.items.length < limit
        
        if(checkAvailability){
            if(req.file){
                await parentDoc.items.push({heading,description,image:req.file.path,uniqueId:uuidv4()})
            }else{
                await parentDoc.items.push({heading,description,image:"",uniqueId:uuidv4()})
            }
            await parentDoc.save()
            return res.json({success:true,message:"Added component successfully"})
        }else{
            return res.json({success:false,message:"The section does not support more elements"})
        }
        
       }

       return res.json({success:false,message:"Something went wrong while adding"})

    } catch (error) {
        console.log(error)
    }
}

const deleteUiComponent = async(req,res) =>{
    try {
       const {parentId,docId} = req.body
       const parentDocument = await UI.findById({_id:parentId})
       if(parentDocument){
        const itemToDelete = await parentDocument.items.findIndex((item)=>item.uniqueId==docId)
              
        if(itemToDelete !== -1){
                await parentDocument.items.splice(itemToDelete,1)
                await parentDocument.save()
                return res.json({success:true,message:"Removed item successfully"})
            }

        return res.json({success:false,message:"Something went wrong"})
            
       }

    } catch (error) {
        console.log(error)
    }
}

const rearrangeUiComponent = async(req,res) =>{
    try {
        const {parentDocId,sectionData} = req.body
        const parentDocument = await UI.findById({_id:parentDocId})
        if(parentDocument){
            parentDocument.items.length = 0
            parentDocument.items = sectionData

            await parentDocument.save()
            return res.json({success:true,message:"Reordered successfully"})
        }

        return res.json({success:false,message:"Something went wrong"})
        
    } catch (error) {
        console.log(error)
    }
}

const addNews = async(req,res) =>{
    try {
        const {heading,category,content,date} = req.body    
        const newsData = await NEWS.create({
            category,
            date,
            heading,
            content
        })

        if(req.file){
            newsData.image = req.file.path
        }else{
            newsData.image=""
        }

        await newsData.save()


        if(newsData){
            return res.json({success:true,message:"News added successfully"})
        }else{
            return res.json({success:false,message:"Something went wrong"})
        }

    } catch (error) {
        console.log(error)
    }
}


const getNewsData = async(req,res) =>{
    try {
        const newsData = await NEWS.find({})
        if(newsData){
            return res.json({success:true,newsData})
        }else{
            return res.json({success:false})
        }

    } catch (error) {
        console.log(error)
    }
}

const getIndiNewsData = async(req,res) =>{
    try {
        const {newsId} = req.body
        const newsData = await NEWS.findById({_id:newsId})
        if(!newsData){
            return res.json({success:"Something went wrong"})
        }

        return res.json({success:true,newsData})

    } catch (error) {
        console.log(error)
    }
}

const editNews = async(req,res) =>{
    try {
        const {heading,category,content,newsId,date} = req.body
        let updateNews;
        if(req.file){
            updateNews = await NEWS.findByIdAndUpdate({_id:newsId},{$set:{heading,category,content,date,image:req.file.path}})
        }else{
            updateNews = await NEWS.findByIdAndUpdate({_id:newsId},{$set:{heading,category,content,date}})
        }

        if(updateNews){
            return res.json({success:true,message:"Updated news content successfully"})
        }

        return res.json({success:false,message:"Something went wrong"})

    } catch (error) {
        console.log(error)
    }
}

const deleteNews = async(req,res) =>{
    try {
       const {newsId} = req.body 
       const removeNews = await NEWS.findByIdAndDelete({_id:newsId})
       if(removeNews){
        return res.json({success:true,message:"News removed successfully"})
       }
       
       return res.json({success:false,message:"Something went wrong"})

    } catch (error) {
        console.log(error)
    }
}

const addCategory = async(req,res) =>{
    try {
       const category = await CATEGORY.create({
        categoryName:req.body.newCategory
       }) 

       if(category){
        return res.json({success:true,message:"Category added successfully"})
       }

       return res.json({success:false,message:"Something went wrong"})

    } catch (error) {
        console.log(error)
    }
}

const getCategories = async(req,res) =>{
    try {
       const categoryData = await CATEGORY.find({})
       
       if(categoryData){
        return res.json({success:true,categoryData})
       }

       return res.json({success:false})

    } catch (error) {
        console.log(error)
    }
}

const reOrderNews = async(req,res) =>{
    try {
        const newsData = req.body.newsData
        const deleteData = await NEWS.deleteMany()
        if(deleteData){
            const insertData = await NEWS.insertMany(newsData)
            if(insertData){
                return res.json({success:true,message:"Reordered data"})
            }
        }

        return res.json({success:false,message:"Something went wrong"})
        
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
    getUiSections,
    addUiComponent,
    deleteUiComponent,
    rearrangeUiComponent,
    addNews,
    getNewsData,
    getIndiNewsData,
    editNews,
    deleteNews,
    addCategory,
    getCategories,
    reOrderNews
}