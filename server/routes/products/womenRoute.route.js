const express=require("express")
const { ClothingModel } = require("../../models/productmodel.model")
const womenRoute=express.Router()

womenRoute.get("/",async(req,res)=>{
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
        const product=await ClothingModel.find(q)
        console.log(product.length)
        res.status(200).json({msg:"here are the product",product})
    } catch (error) {
        res.status(400).json({msg:error})
    }
})
module.exports={
    womenRoute
}