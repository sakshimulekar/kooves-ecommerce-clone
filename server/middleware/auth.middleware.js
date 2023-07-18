const { blacklist } = require("../blacklist")
const jwt=require("jsonwebtoken")
require("dotenv").config();
const auth=(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1]
        if(token){
            const isBlacklisted=blacklist.includes(token)
            console.log(isBlacklisted)
            if(isBlacklisted){
                res.status(200).json({msg:"token expired,please login"})
            }
            else{
                const decoded=jwt.verify(token,process.env.secret_key)
                console.log(decoded)
                req.body.userId=decoded.userId;
                req.body.username=decoded.username;
                console.log(decoded.userId,decoded.username)
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
