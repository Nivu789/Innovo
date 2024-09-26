const sendEmailResend = require('../helpers/sendEmailResend')
const EMAIL = require('../models/emailModel')
const UI = require('../models/uiModel.js')

const sendEmail = async(req,res) =>{
    try {
        const {name,email,phone,message} = req.body.data
        const emailSend = await sendEmailResend(email,name)
        if(!emailSend){
            console.log("Failed")
            res.status(400).json({success:false,message:"Failed to send mail"})
        }else{
            console.log("Passed")
            await EMAIL.create({
                name,
                email,
                phone,
                message
            })

            res.status(200).json({success:true,message:"Thank you we will get back to you soon"})
        }

    } catch (error) {
        console.log(error)
    }
}

const fetchUiContent = async(req,res) =>{
    try {
        const {sectionId} = req.body
        console.log(sectionId)
        const uiData = await UI.find({sectionId})
        
        if(uiData){
            return res.json({success:true,uiData})
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    sendEmail,
    fetchUiContent
}