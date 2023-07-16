const express=require("express")
const { GirlsTShirtModel } = require("../../models/productmodel.model")
const kidsRoute=express.Router()

kidsRoute.get("/",async(req,res)=>{
    try {
        const kids=await GirlsTShirtModel.find()
        res.status(200).json({msg:"kids data",kids})
    } catch (error) {
        res.status(200).json({msg:error.message})
    }
})

module.exports={
    kidsRoute
}