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
        const user=await UserModel.findOne({email})
        console.log(user,' : register 21')
        if(user){
            console.log('register already')
            res.status(200).json({msg:"registered already! Please Log-In",user})
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

userRoute.post('/login',async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await UserModel.findOne({email})
        console.log(user)
        if(user){
            console.log('found')
            bcrypt.compare(password,user.password,async(err,result)=>{
                if(result){
                    const token = jwt.sign({userId:user._id},process.env.secret_key)
                    console.log(token)
                    return res.status(200).json({msg:'login success',user,token})
                }
                else{
                    return res.status(400).json({err:'invalid credential'})
                }
            })
            //return res.status(200).json({msg:"user found"})
        }
        else {
            console.log('not found')
            return res.status(200).json({msg:"user not found,please Register first"})
        }
        
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({msg:error.message})
    }
})

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