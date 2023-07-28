const express=require('express')
const { MenwishlistModel } = require('../../models/WishListmodel.model')

const wishlistRoute=express.Router()

wishlistRoute.get("/", async(req,res)=>{
    try {
        const card=await MenwishlistModel.find()
        res.status(200).json({msg:'here is wishlist',card})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

wishlistRoute.post('/addtowishlist',async(req,res)=>{
    console.log(req.body)
    const {_id}=req.body
    try {
        const card=await MenwishlistModel.findOne({_id})
        console.log(card)
        if(card){
            res.status(200).json({msg:'already in wishlist',card})
        }
        else{
            const data=new MenwishlistModel(req.body)
            await data.save()
        res.status(200).json({msg:'added to wishlist',data})
        }
        
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

// wishlistRoute.delete("/delete/:userId",auth, async(req,res)=>{
//     const {userId}=req.params;
//     try {
//         const card=await MenwishlistModel.find()
//         res.status(200).json({msg:'here is wishlist',card})
//     } catch (error) {
//         res.status(400).json({msg:error.message})
//     }
// })
module.exports={
    wishlistRoute
}