const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    firstName:{type:String,require},
    lastName:{type:String,require},
    email:{type:String,require},
    passward:{type:String,require}
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}