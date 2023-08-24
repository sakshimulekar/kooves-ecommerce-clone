const express=require("express")
const { UserModel } = require("../models/userModel.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { blacklist } = require("../blacklist")
require("dotenv").config()
const userRoute=express.Router()

// userRoute.get("/",async(req,res)=>{
//     try {
//         const user=await UserModel.find()
//         res.status(200).json({msg:"here are the users",user})
//     } catch (error) {
//         res.status(400).json({msg:error.message})
//     }
// })
userRoute.post("/register",async(req,res)=>{
    const {email,password,firstName,lastName}=req.body
    try {
        const match=await UserModel.findOne({email})
        console.log(match)
        if(match){
            return res.status(200).json({msg:"registered already! Please Log-In",user})
        }
        else{
            if(checkPass(password)){
                bcrypt.hash(password,5,async(err,hash)=>{
                    if(hash){
                        const user=new UserModel({...req.body,password:hash})
                        await user.save()
                        return res.status(200).json({msg:"registered successfully!",user})
                    }
                    else{
                        return res.status(200).json({msg:err.message,hash_error})
                    }
                })
            }
            else{
                return res.status(200).json({error:"password should contain 8 chars,at lease one uppercase,a special char,a number"})
            }
        }  
    } catch (error) {
        return res.status(400).json({msg:error.message,error:"catchblock"})
    }
})

userRoute.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const match = await UserModel.findOne({ email });
        console.log(match,': 52 userroute userinfo ')
        if (match) {
            // Compare the passwords using bcrypt
            const result = await bcrypt.compare(password, match.password);
            console.log(result,'result userroute 57')
            if (result) {
                // Generate a JWT token
                const token = jwt.sign({ userId: match._id }, process.env.secret_key);
                console.log(token,': token from userroute 61')
                return res.status(200).json({ msg: "Login successful!", token,match });
            } else {
                console.log(error.message,': 64 error in userroute')
                return res.status(401).json({ msg: 'Invalid credentials' });
            }
        } else {
            return res.status(401).json({ msg: 'Invalid credentials',error:error.message });
        }
    } catch (error) {
        return res.status(500).json({ msg: 'Internal server error',error:error.message });
    }
});

userRoute.get("/logout",(req,res)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1]
        console.log(token)
        blacklist.push(token)
        return res.status(200).json({msg:"Logout successfull!!"})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

const checkPass=(password)=>{
    if(password.length < 8){
        return false;
    }
    let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums="0123456789"
    let spec="[]{}!@#$%^&*()_-+=~`";
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    
    for(let i=0; i<password.length; i++){
        if(alpha.includes(password[i])){
            flag1 = true
        }
        if(nums.includes(password[i])){
            flag2 = true
        }
        if(spec.includes(password[i])){
            flag3 = true
        }
    }
    return flag1 && flag2 && flag3 ? true : false
}

module.exports={
    userRoute
}