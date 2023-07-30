const express = require('express');
const { auth } = require('../middleware/auth.middleware');
const { UserModel } = require('../models/userModel.model');
//const { FootwearModel } = require('../models/productmodel.model'); // Make sure to import the FootwearModel

const cartRoute = express.Router()
cartRoute.use(auth)
cartRoute.post('/addToCart', async (req, res) => {
  const productId = req.body._id;
  const quantity = req.body.quantity;
  const userId = req.user._id;

  try {
    const user = await UserModel.findById(userId);

    // Check if the product with the given productId is already in the user's cart
    const existingCartItem = user.cart.find((item) => item.product && item.product.equals(productId));

    if (existingCartItem) {
      // If the product is already in the cart, update its quantity
      existingCartItem.quantity += quantity;
    } else {
      // If the product is not in the cart, add it as a new item with the given quantity
      const newCartItem = { product: productId, quantity };
      user.cart.push(newCartItem);
    }

    await user.save();

    return res.status(200).json({ message: 'Product added to cart successfully', cart: user.cart });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    return res.status(500).json({ error: 'Could not add product to cart' });
  }
});

cartRoute.get('/',async(req,res)=>{
    try {
        const userId=req.user._id
        console.log(userId)
        const user=await UserModel.findById(userId).populate('cart.product')
        if(!user){
            res.status(400).json({msg:"user not found"})
        }
        res.status(200).json({msg:"here are the cart product",user})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

cartRoute.patch("/edit/:productId", async (req, res) => {
  const { productId } = req.params;
  const quantity = req.body.quantity;
  const userId = req.user._id;
  try {
    const user = await UserModel.findById(userId);
    console.log(user)
    const cartItemIndex = user.cart.findIndex((item) => item.product.toString() === productId);
    console.log(cartItemIndex)
    if (cartItemIndex === -1) {
      return res.status(400).json({ msg: 'Cart item not found in cart' });
    }

    user.cart[cartItemIndex].quantity = quantity;
    await user.save();
    return res.status(200).json({ message: 'Cart item quantity updated successfully', cart: user.cart });
  } catch (error) {
    return res.status(500).json({ error: 'Could not update cart item quantity', msg: error.message });
  }
});

// cartRoute.route.js

cartRoute.delete('/delete/:productId', auth, async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id;

  try {
    const user = await UserModel.findById(userId);

    const cartItemIndex = user.cart.findIndex((item) => item.product && item.product.equals(productId));

    if (cartItemIndex === -1) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    user.cart.splice(cartItemIndex, 1);
    await user.save();

    return res.status(200).json({ message: 'Cart item removed successfully', cart: user.cart });
  } catch (error) {
    console.error('Error removing cart item:', error);
    return res.status(500).json({ error: 'Could not remove cart item' });
  }
});



module.exports = {
  cartRoute,
};
