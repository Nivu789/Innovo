const jwt = require('jsonwebtoken')

const adminAuth = async(req,res) =>{
    try {
       if(req.headers.authorization){
        const tokenCheck = jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        console.log(tokenCheck)
        if(tokenCheck.user){
            return res.json({success:true})
        }else{
            return res.json({success:false})
        }
       } 

       return res.json({success:false})
       
    } catch (error) {
        console.log(error)
        return res.json({success:false})
    }
}

module.exports = {
    adminAuth
}