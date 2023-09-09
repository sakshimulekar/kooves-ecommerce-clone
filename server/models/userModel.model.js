const mongoose=require("mongoose")
const {FootwearModel}=require('../models/productmodel.model')

const cartItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref:FootwearModel},
    quantity: { type: Number, default: 1 },
},{
    versionKey:false
});

const orderSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'UserModel'},
    orderId : {type:String},
    items : [{type:mongoose.Schema.Types.ObjectId, ref:'FootwearModel'}],
    paymentStatus : {type:String},
},{
    versionKey:false
})
  

const userSchema=mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    picture:{type:String},
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref:FootwearModel }],
    cart: [cartItemSchema],
    userId:{type:String},
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: orderSchema }]
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}