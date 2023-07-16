const mongoose = require('mongoose');

// Define the schema for the "men's footwear" collection
const footwearSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  gender: String,
  sizes: [String],
  description: String,
  category: String,
  brand: String,
  color: String,
  discount: String,
  off_price: Number,
  images: {
    image1: String,
    image2: String,
    image3: String
  },
  rating: Number,
  count: Number
});

// Define the schema for the "women's clothing" collection
const clothingSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  quantity: Number,
  gender: String,
  sizes: [String],
  description: String,
  category: String,
  brand: String,
  color: String,
  discount: String,
  off_price: Number,
  images: {
    image1: String,
    image2: String,
    image3: String,
    image4: String
  },
  rating: Number,
  count: Number
});

// Define the schema for the "girls t-shirt" collection
const girlsTShirtSchema = new mongoose.Schema({
  rating: Number,
  count: Number,
  images: {
    image1: String,
    image2: String,
    image3: String,
    image4: String
  },
  image: String,
  brand: String,
  title: String,
  sizes: [String],
  price: Number,
  id: Number,
  productDiscountPercentage: String,
  quantity: Number,
  gender: String,
  category: String
});

// Create models based on the defined schemas
const FootwearModel = mongoose.model('man', footwearSchema);
const ClothingModel = mongoose.model('woman', clothingSchema);
const GirlsTShirtModel = mongoose.model('kids', girlsTShirtSchema);

module.exports={
    FootwearModel,
    ClothingModel,
    GirlsTShirtModel
}