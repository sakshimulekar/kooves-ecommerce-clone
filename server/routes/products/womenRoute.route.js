const express=require("express")
const { ClothingModel } = require("../../models/productmodel.model")
const womenRoute=express.Router()

womenRoute.get("/",async(req,res)=>{
    try {
        const women=await ClothingModel.find()
        res.status(200).json({msg:"women data",women})
    } catch (error) {
        res.status(200).json({msg:error.message})
    }
})

module.exports={
    womenRoute
}