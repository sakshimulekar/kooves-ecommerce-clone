const express = require("express");
const { FootwearModel } = require("../../models/productmodel.model");
const menRoute = express.Router();

menRoute.get('/top/:id',async(req,res)=>{
  let {id} = req.params
  try {
    const product = await FootwearModel.findById(id)
    console.log(product)
    res.status(200).json({product:product})
  } catch (error) {
    res.status(401).json({msg:error.message})
  }
})

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

menRoute.get('/',async(req,res)=>{
  try {
    const selectedProduct = await FootwearModel.find()
    console.log(selectedProduct,'79')
    res.status(200).json({msg:'this is the selected product',selectedProduct})
  } catch (error) {
    console.log(error.message,'80')
    res.status(400).json({msg:error.message})
  }
})

menRoute.get('/api/search', async (req, res) => {
  try {
    const { query } = req.query;
    const results = await performSearch(query);
    res.status(200).json({ results });
  } catch (error) {
    console.error(error); // Use console.error for error logging
    res.status(500).json({ error: 'An error occurred while searching.' });
  }
});

const performSearch = async (query) => {
  try {
    const results = await FootwearModel.find(
      { $text: { $search: query } },
      { score: { $meta: 'textScore' } }
    ).sort({ score: { $meta: 'textScore' } });
    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  menRoute,
};
