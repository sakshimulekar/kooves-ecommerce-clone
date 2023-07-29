const mongoose=require("mongoose")
const {FootwearModel}=require('../models/productmodel.model')

const userSchema=mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    picture:{type:String},
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref:FootwearModel }],
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}