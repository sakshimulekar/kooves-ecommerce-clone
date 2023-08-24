// const express=require("express")
// const cors=require("cors")
// const cookieParser = require('cookie-parser');
// const { userRoute } = require("./routes/userRoute.route")
// const { connection } = require("./db")
// const { menRoute } = require("./routes/products/menRoute.route")
// const { womenRoute } = require("./routes/products/womenRoute.route")
// const { kidsRoute } = require("./routes/products/kidsRoute.route")
// const { wishlistRoute } = require("./routes/Wishlist/wishlist.route")
// const {passport}=require("./routes/google_auth")
// const { cartRoute } = require("./routes/cartRoute.route")
// const { stripeRoute } = require("./routes/stripe.route")
// const jwt=require("jsonwebtoken")

// const app=express()
// require("dotenv").config()

// app.use(express.json())
// app.use(cors())
// app.use(cookieParser());
// // app.get("/",(req,res)=>{
// //     try {
// //         res.status(200).json({msg:"this the home page"})
// //     } catch (error) {
// //         res.status(400).json({msg:error.message})
// //     }
// // })


// app.get(
//     "/auth/google",
//     passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get("/auth/google/callback",
//     passport.authenticate("google", {
//         failureRedirect: "/login",
//         redirectUrl:'http://localhost:3000',
//         session: false,
//     }),(req, res)=> {
//     const user = req.user;
//     //const googleAccessToken = req.query.access_token;
//     console.log(user,"line : 39")
//     // Create a JWT token with the user data and your secret key
//     const token = jwt.sign({user:user}, process.env.secret_key);
//     const redirectUrl = `http://localhost:3000/success?token=${token}&firstName=${user.firstName}&picture=${user.picture}`;
//     res.redirect(redirectUrl);    
// }
// );

// app.use("/users",userRoute)
// app.use("/men",menRoute)
// app.use("/women",womenRoute)
// app.use("/kids",kidsRoute)
// app.use("/wishlist",wishlistRoute)
// app.use("/cart",cartRoute)
// app.use("/checkout",stripeRoute)

// app.listen(process.env.port,async()=>{
//     try {
//         await connection
//         console.log(`server run at ${process.env.port}` )
//     } catch (error) {
//         console.log(error.message)
//     }
// })


//previous code from git:
const express=require("express")
const cors=require("cors")
const axios = require('axios')
const cookieParser = require('cookie-parser');
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
const stripe = require('stripe')(process.env.STRIPE_SECRETE_KEY);
app.use(express.json())
app.use(cors())
app.use(cookieParser());

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

app.get('/api/google-maps', async (req, res) => {
    const { query } = req;
    const apiKey = process.env.GOOGLE_API_KEY;
    console.log(apiKey,'query')
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&${query}`;
  
    try {
      const response = await axios.get(apiUrl);
      console.log(response)
      res.json(response.data);
    } catch (error) {
        console.log(error.message)
      res.status(500).json({ error: 'An error occurred',msg:error.message});
    }
  });
  
app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login", // Redirect to login page if authentication fails
        session: false,
    }),
    (req, res) => {
        const user = req.user;
        // Handle successful authentication
        const token = jwt.sign({ user: user }, process.env.secret_key);
        const redirectUrl = `http://localhost:3000/success?token=${token}&firstName=${user.firstName}&picture=${user.picture}`;
        res.redirect(redirectUrl);
    }
);
//whsec_7SmIgdJoFmWoS7y7ccDksClSxCAIXAh6
//"url": "https://webhook.site/5f37c5a2-33ed-499d-a330-6a236a179486"
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

