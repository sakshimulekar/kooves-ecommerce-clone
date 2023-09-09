// const express=require('express')
// //const { MenwishlistModel } = require('../../models/WishListmodel.model')
// const { UserModel } = require('../../models/userModel.model')
// const { auth } = require('../../middleware/auth.middleware')

// const wishlistRoute=express.Router()

// wishlistRoute.get("/",auth, async(req,res)=>{
//   const userId=req.user._id
//     try {
//         const card=await UserModel.findById(userId).populate('wishlist')
//         console.log(card)
//         res.status(200).json({msg:'here is wishlist',product:card.wishlist})
//     } catch (error) {
//       console.error('Error fetching wishlist:', error);
    
//         res.status(400).json({msg:error.message})
//     }
// })

// wishlistRoute.post('/addtowishlist',auth,async(req,res)=>{
//     const  productId  = req.body._id;
//     console.log(productId,"wishlist route productid 17")
//     const userId = req.user._id; // Assuming you set the user object in the request during authentication middleware.
//     console.log(userId,"wishlist route userId 19")
//     try {
//       const user = await UserModel.findById(userId);
//       console.log(user,'28')
//       if (user.wishlist.includes(productId)) {
//         return res.status(200).json({msg:user, message: 'Product is already in the wishlist' });
//       }
  
//       // If the product is not a duplicate, add it to the user's wishlist
//       user.wishlist.push(productId);
//       await user.save();
//       console.log(user,'check wishlist product 36')
//       return res.status(200).json({ message: 'Product added to wishlist successfully',msg:user });
//     } 
//   catch (error) {
//     console.error('Error adding product to wishlist:', error);
//     return res.status(500).json({ msg:error.message,error: 'Could not add product to wishlist' });
//   }
// })

// wishlistRoute.delete("/delete/:productId", auth, async (req, res) => {
//   const productId = req.params.productId; // Get the productId from the request URL parameter

//   const userId = req.user._id; // Assuming you set the user object in the request during authentication middleware.

//   try {
//     const user = await UserModel.findById(userId);

//     if (!user.wishlist.includes(productId)) {
//       // If the product is not in the wishlist, return an error
//       return res.status(400).json({ error: 'Product not found in the wishlist' });
//     }

//     // If the product is in the wishlist, remove it from the user's wishlist
//     user.wishlist = user.wishlist.filter((item) => item.toString() !== productId);
//     await user.save();

//     return res.status(200).json({ message: 'Product removed from wishlist successfully' });
//   } catch (error) {
//     console.error('Error removing product from wishlist:', error);
//     return res.status(500).json({ error: 'Could not remove product from wishlist' });
//   }
// });

// module.exports={
//     wishlistRoute
// }

const express=require('express')
//const { MenwishlistModel } = require('../../models/WishListmodel.model')
const { UserModel } = require('../../models/userModel.model')
const { auth } = require('../../middleware/auth.middleware')

const wishlistRoute=express.Router()

wishlistRoute.get("/",auth, async(req,res)=>{
  const userId=req.user._id
    try {
        const card=await UserModel.findById(userId).populate('wishlist')
        console.log(card)
        res.status(200).json({msg:'here is wishlist',product:card.wishlist})
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    
        res.status(400).json({msg:error.message})
    }
})

wishlistRoute.post('/addtowishlist',auth,async(req,res)=>{
    const  productId  = req.body._id;
    console.log(productId,"wishlist route productid 17")
    const userId = req.user._id; // Assuming you set the user object in the request during authentication middleware.
    console.log(userId,"wishlist route userId 19")
    try {
      const user = await UserModel.findById(userId);
      console.log(user,'28')
      if (user.wishlist.includes(productId)) {
        return res.status(200).json({msg:user, message: 'Product is already in the wishlist' });
      }
  
      // If the product is not a duplicate, add it to the user's wishlist
      user.wishlist.push(productId);
      await user.save();
      console.log(user,'check wishlist product 36')
      return res.status(200).json({ message: 'Product added to wishlist successfully',msg:user });
    } 
  catch (error) {
    console.error('Error adding product to wishlist:', error);
    return res.status(500).json({ msg:error.message,error: 'Could not add product to wishlist' });
  }
})

wishlistRoute.delete("/delete/:productId", auth, async (req, res) => {
  const productId = req.params.productId; // Get the productId from the request URL parameter

  const userId = req.user._id; // Assuming you set the user object in the request during authentication middleware.
  console.log(userId,productId,": 121 wishlist userid, productid")
  try {
    const user = await UserModel.findById(userId);
    console.log(user,': 124 user from wishlist')
    if (!user.wishlist.includes(productId)) {
      // If the product is not in the wishlist, return an error
      return res.status(400).json({ error: 'Product not found in the wishlist' });
    }

    // If the product is in the wishlist, remove it from the user's wishlist
    user.wishlist = user.wishlist.filter((item) => item.toString() !== productId);
    await user.save();

    return res.status(200).json({ message: 'Product removed from wishlist successfully',wishlist:user.wishlist });
  } catch (error) {
    console.error('Error removing product from wishlist:', error);
    return res.status(500).json({ error: 'Could not remove product from wishlist' });
  }
});

module.exports={
    wishlistRoute
}