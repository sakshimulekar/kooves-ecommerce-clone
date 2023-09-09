// const { blacklist } = require("../blacklist")
// const jwt=require("jsonwebtoken");
// const { UserModel } = require("../models/userModel.model");
// require("dotenv").config();


// const auth=async(req,res,next)=>{
//     try {
//         const token=req.headers.authorization?.split(" ")[1]
//         if(token){
//             const isBlacklisted=blacklist.includes(token)
//             //console.log(isBlacklisted)
//             if(isBlacklisted){
//                 res.status(200).json({msg:"token expired,please login"})
//             }
//             else{
//                 const decoded=jwt.verify(token,process.env.secret_key)
//                 console.log(decoded.user._id,"18")
//                 let userId = decoded.user._id
//                 console.log(userId,'middleware 17')
//                 const user=await UserModel.findById(userId)
//                 console.log(user,'middleware 19')
//                 if(!user){
//                     res.status(200).json({msg:"unauthorized"})
//                 }
//                 req.user=user
//                 console.log(req.user)
//                 next()
//             }
//         }
//         else{
//             res.status(200).json({msg:"please login!"})
//         }
//     } catch (error) {
//         res.status(200).json({msg:error.message})
//     }
// }


// module.exports={
//     auth
// }


// const jwt = require('jsonwebtoken');
// const { UserModel } = require('../models/userModel.model');
// require('dotenv').config();

// const auth = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(' ')[1];
//     console.log(token,"auth 52")
//     if (token) {
//       const decoded = jwt.verify(token, process.env.secret_key);
//       console.log(decoded,"auth 55 decoded")
//       const userId = decoded.userId;
//       console.log(userId,"auth 55 userId")
//       const user = await UserModel.findById(userId);
      
//       if (!user) {
//         res.status(200).json({ msg: 'Unauthorized' });
//       }

//       req.user = user;
//       next();
//     } else {
//       res.status(200).json({ msg: 'Please log in!' });
//     }
//   } catch (error) {
//     res.status(200).json({ msg: error.message });
//   }
// };

// module.exports = {
//   auth
// };

//previous code from git :
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/userModel.model');
require('dotenv').config();

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token,"auth 52")
    if (token) {
      const decoded = jwt.verify(token, process.env.secret_key);
      
      if(decoded){
        console.log(decoded,"auth 91 decoded")
        const userId = decoded.userId;
        console.log(userId,"auth 55 userId")
      const user = await UserModel.findById(userId);
      console.log(userId,"auth 95 user")
      if (!user) {
        res.status(200).json({ msg: 'Unauthorized' });
      }

      req.user = user;
      next();
      }
     
      
    } else {
      res.status(200).json({ msg: 'Please log in!' });
    }
  } catch (error) {
    res.status(200).json({ msg: error.message });
  }
};

module.exports = {
  auth
};
