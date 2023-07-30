// const mongoose=require('mongoose')
// const {UserModel}=require('../models/userModel.model')
// const {FootwearModel} = require("./productmodel.model")

// const cartSchema=mongoose.Schema({
//   user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: UserModel,
//         required: true,
//       },
//       products: [
//         {
//           product: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: FootwearModel,
//           },
//           quantity: {
//             type: Number,
//             default: 1,
//           },
//         },
//       ]
// })

// const CartMenModel=mongoose.model('mencart',cartSchema)

// module.exports={
//     CartMenModel
// }