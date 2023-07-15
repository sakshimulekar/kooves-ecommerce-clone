const express=require("express")
const { UserModel } = require("../models/userModel.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { blacklist } = require("../blacklist")
require("dotenv").config()
const userRoute=express.Router()

userRoute.get("/",async(req,res)=>{
    try {
        const user=await UserModel.find()
        res.status(200).json({msg:"here are the users",user})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})
userRoute.post("/register",async(req,res)=>{
    const {email,passward}=req.body
    try {
        const match=await UserModel.findOne({email})
        console.log(match)
        if(match){
            res.status(200).json({msg:"registered already! Please Log-In",user})
        }
        else{
            if(checkPass(passward)){
                bcrypt.hash(passward,5,async(err,hash)=>{
                    if(hash){
                        const user=new UserModel({...req.body,passward:hash})
                        await user.save()
                        res.status(200).json({msg:"registered successfully!",user})
                    }
                    else{
                        res.status(200).json({msg:err.message,hash_error})
                    }
                })
            }
            else{
                res.status(200).json({error:"password should contain 8 chars,at lease one uppercase,a special char,a number"})
            }
            
        }  
    } catch (error) {
        res.status(400).json({msg:error.message,error:"catchblock"})
    }
})

userRoute.post("/login",async(req,res)=>{
    const {email,passward}=req.body
    try {
        const match=await UserModel.find({email})
        console.log(match)
        if(!match){
            res.status(200).json({msg:"user not found, register first"})
        }
        else{
            
                bcrypt.compare(passward,match.passward,async(result,err)=>{
                    if(result){
                        const token=jwt.sign({userId:match._id,username:match.firstName},process.env.secret_key)
                        res.status(200).json({msg:"Login successfull!",match,token})
                    }
                    else{
                        res.status(200).json({msg:"wrong credential"})
                    }
                })
            
        }  
    } catch (error) {
        res.status(400).json({msg:error.message,error:"catchblock"})
    }
})

userRoute.get("/logout",(req,res)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1]
        console.log(token)
        blacklist.push(token)
        res.status(200).json({msg:"Logout successfull!!"})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

const checkPass=(passward)=>{
    if(passward.length < 8){
        return false;
    }
    let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums="0123456789"
    let spec="[]{}!@#$%^&*()_-+=~`";
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;

    for(let i=0; i<passward.length; i++){
        if(alpha.includes(passward[i])){
            flag1 = true
        }
        if(nums.includes(passward[i])){
            flag2 = true
        }
        if(spec.includes(passward[i])){
            flag3 = true
        }
    }
    return flag1 && flag2 && flag3 ? true : false
}

module.exports={
    userRoute
}