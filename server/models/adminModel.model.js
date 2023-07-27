const mongoose=require("mongoose")

const adminSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    passward:{type:String,required:true}
    
},{
    versionKey:false
})

const AdminModel=mongoose.model("admin",adminSchema)

module.exports={
    AdminModel
}