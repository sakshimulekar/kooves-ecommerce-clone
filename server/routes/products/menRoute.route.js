const express=require("express")
const { FootwearModel } = require("../../models/productmodel.model")
const menRoute=express.Router()

menRoute.get("/",async(req,res)=>{
    try {
        const men=await FootwearModel.find()
        res.status(200).json({msg:"men data",men})
    } catch (error) {
        res.status(200).json({msg:error.message})
    }
})

module.exports={
    menRoute
}