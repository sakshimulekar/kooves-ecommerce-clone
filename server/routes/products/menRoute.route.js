// const express=require("express")
// const { FootwearModel } = require("../../models/productmodel.model")
// const menRoute=express.Router()


// menRoute.get("/", async (req, res) => {
//     try {
//       let q = {};
//       const { categories, brand, color, sizes, category,_order,_rating,page } = req.query;
//         console.log(categories, brand, color, sizes, category,  _order,_rating,page)
//       if (categories) {
//         q.categories = categories;
//       }
//       if (category) {
//         q.category = category;
//       }
//       if (brand) {
//         q.brand = brand;
//       }
//       if (color) {
//         q.color = color;
//       }
//       if (sizes) {
//         q.sizes = sizes;
//       }
//       const sortoptions = {}
//       if(_order === "price_asc"){
//         sortoptions.price = -1
//       }
//       if(_order === "price_desc"){
//         sortoptions.price = 1
//       }
//       if(_rating === "high"){
//         sortoptions.rating = -1
//       }
//       if(_rating === "low"){
//         sortoptions.rating = 1
//       }
//       const products = await FootwearModel.find(q).skip((+page - 1)*8).limit(8).sort(sortoptions)
  
//       res.status(200).json({ msg: "Here are the products", products });
//     } catch (error) {
//       res.status(400).json({ msg: error });
//     }
//   });
  

// module.exports={
//     menRoute
// }

const express = require("express");
const { FootwearModel } = require("../../models/productmodel.model");
const menRoute = express.Router();

menRoute.get("/:page", async (req, res) => {
  let {page} = req.params
  try {
    let q = {};4
    
    const { categories, brand, color, sizes, category, _order, _rating } = req.query;
    console.log(categories, brand, color, sizes, category, _order, _rating);

    if (categories) {
      q.categories = categories;
    }
    if (category) {
      q.category = category;
    }
    if (brand) {
      q.brand = brand;
    }
    if (color) {
      q.color = color;
    }
    if (sizes) {
      q.sizes = sizes;
    }
    const sortoptions = {};
    if (_order === "price_asc") {
      sortoptions.price = -1;
    }
    if (_order === "price_desc") {
      sortoptions.price = 1;
    }
    if (_rating === "high") {
      sortoptions.rating = -1;
    }
    if (_rating === "low") {
      sortoptions.rating = 1;
    }

    // Find the total item count without a specific query
    const itemCount = await FootwearModel.countDocuments(q);

    // Use the itemCount to calculate the total number of pages
    const totalPages = Math.ceil(itemCount / 8);
    // let page = Number(_page)
    console.log(page)
    //console.log(totalPages,'totalpages from mens products')
    const products = await FootwearModel.find(q)
      .skip((+page - 1) * 8)
      .limit(8)
      .sort(sortoptions);

    res.status(200).json({ msg: "Here are the products", products, totalPages });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

module.exports = {
  menRoute,
};
