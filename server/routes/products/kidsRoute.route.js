const express=require("express")
const { GirlsTShirtModel } = require("../../models/productmodel.model")
const kidsRoute=express.Router()

// kidsRoute.get("/",async(req,res)=>{
//     try {
//         const kids=await GirlsTShirtModel.find()
//         res.status(200).json({msg:"kids data",kids})
//     } catch (error) {
//         res.status(200).json({msg:error.message})
//     }
// })

kidsRoute.get("/",async(req,res)=>{
    try {
        let  q={}
        const {brand,category}=req.query;
        if(category){
            q.category=category
        }
        if(brand){
            q.brand=brand
        }
        
        const product=await GirlsTShirtModel.find(q)
        console.log(product.length)
        res.status(200).json({msg:"here are the product",product})
    } catch (error) {
        res.status(400).json({msg:error})
    }
})
module.exports={
    kidsRoute
}