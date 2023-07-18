const express=require("express")
const { FootwearModel } = require("../../models/productmodel.model")
const menRoute=express.Router()

// menRoute.get("/",async(req,res)=>{
//     try {
//         const men=await FootwearModel.find()
//         res.status(200).json({msg:"men data",men})
//     } catch (error) {
//         res.status(200).json({msg:error.message})
//     }
// })

menRoute.get("/",async(req,res)=>{
    try {
        let  q={}
        const {categories,brand,color,sizes,category}=req.query;
        if(categories){
            q.categories=categories
        } 
        if(category){
            q.category=category
        }
        if(brand){
            q.brand=brand
        }
        if(color){
            q.color=color
        }
        if(sizes){
            q.sizes=sizes
        }
        const product=await FootwearModel.find(q)
        console.log(product.length)
        res.status(200).json({msg:"here are the product",product})
    } catch (error) {
        res.status(400).json({msg:error})
    }
})

module.exports={
    menRoute
}