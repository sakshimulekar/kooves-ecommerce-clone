const { blacklist } = require("../blacklist")
const jwt=require("jsonwebtoken");
const { UserModel } = require("../models/userModel.model");
require("dotenv").config();
const auth=async(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1]
        if(token){
            const isBlacklisted=blacklist.includes(token)
            //console.log(isBlacklisted)
            if(isBlacklisted){
                res.status(200).json({msg:"token expired,please login"})
            }
            else{
                const decoded=jwt.verify(token,process.env.secret_key)
                // console.log(decoded)
                console.log(decoded.userId,'middleware 17')
                const user=await UserModel.findById(decoded.userId)
                console.log(user,'middleware 19')
                if(!user){
                    res.status(200).json({msg:"unauthorized"})
                }
                req.user=user
                console.log(req.user)
                next()
            }
        }
        else{
            res.status(200).json({msg:"please login!"})
        }
    } catch (error) {
        res.status(200).json({msg:error.message})
    }
}


module.exports={
    auth
}
