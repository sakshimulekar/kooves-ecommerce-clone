const express=require("express")
const cors=require("cors")
const { userRoute } = require("./routes/userRoute.route")
const { connection } = require("./db")
const { menRoute } = require("./routes/products/menRoute.route")
const { womenRoute } = require("./routes/products/womenRoute.route")
const { kidsRoute } = require("./routes/products/kidsRoute.route")
const { wishlistRoute } = require("./routes/Wishlist/wishlist.route")
const {passport}=require("./routes/google_auth")
const { cartRoute } = require("./routes/cartRoute.route")
const { stripeRoute } = require("./routes/stripe.route")
const jwt=require("jsonwebtoken")

const app=express()
require("dotenv").config()

app.use(express.json())
app.use(cors())
// app.get("/",(req,res)=>{
//     try {
//         res.status(200).json({msg:"this the home page"})
//     } catch (error) {
//         res.status(400).json({msg:error.message})
//     }
// })


app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login",
        session: false,
    }),(req, res)=> {
    const user = req.user;
    // Create a JWT token with the user data and your secret key
    const token = jwt.sign({user:user}, process.env.secret_key);
    const redirectUrl = `http://localhost:3000/success?token=${token}&id=${user.id}&email=${user.email}&firstName=${user.firstName}&lastName=${user.lastName}&picture=${user.picture}`;
    res.redirect(redirectUrl);    
}
);

app.use("/users",userRoute)
app.use("/men",menRoute)
app.use("/women",womenRoute)
app.use("/kids",kidsRoute)
app.use("/wishlist",wishlistRoute)
app.use("/cart",cartRoute)
app.use("/checkout",stripeRoute)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`server run at ${process.env.port}` )
    } catch (error) {
        console.log(error.message)
    }
})



