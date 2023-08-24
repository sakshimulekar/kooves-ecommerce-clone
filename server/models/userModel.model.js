// const mongoose=require("mongoose")
// const {FootwearModel}=require('../models/productmodel.model')

// const cartItemSchema = new mongoose.Schema({
//     product: { type: mongoose.Schema.Types.ObjectId, ref:FootwearModel},
//     quantity: { type: Number, default: 1 },
// });
  

// const userSchema=mongoose.Schema({
//     firstName:{type:String},
//     lastName:{type:String},
//     email:{type:String},
//     password:{type:String},
//     picture:{type:String},
//     userId:String,
//     wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref:FootwearModel }],
//     cart: [cartItemSchema],
// },{
//     versionKey:false
// })

// const UserModel=mongoose.model("user",userSchema)

// module.exports={
//     UserModel
// }

const mongoose=require("mongoose")
const {FootwearModel}=require('../models/productmodel.model')

const cartItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref:FootwearModel},
    quantity: { type: Number, default: 1 },
},{
    versionKey:false
});
  

const userSchema=mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    picture:{type:String},
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref:FootwearModel }],
    cart: [cartItemSchema],
    userId:{type:String}
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}