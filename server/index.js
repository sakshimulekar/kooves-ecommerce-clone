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
const jwt=require("jsonwebtoken");
const { UserModel } = require("./models/userModel.model");
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

app.post('/webhook', async (req, res) => {
  const payload = req.body;
  const sig = req.headers['stripe-signature'];

  let event;

  try {
      event = stripe.webhooks.constructEvent(payload, sig, process.env.WEBHOOK_KEY);
  } catch (error) {
      return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  // Handle the event based on its type
  if (event.type === 'payment_intent.succeeded' || event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object;
      const orderId = paymentIntent.metadata.order_id;

      try {
          // Fetch the user based on orderId or userId
          const user = await UserModel.findOne({ userId: orderId });
          console.log(user,'webhook 52')
          if (!user) {
              return res.status(404).json({ message: 'User not found' });
          }

          // Create a new order based on payment event data
          const newOrder = {
            orderId: orderId,
            items: user.cart.map(item => item.product), // Assuming each item in cart has a 'product' field
            paymentStatus: event.type === 'payment_intent.succeeded' ? 'paid' : 'failed'
          };

          // Update the user's orders array
          user.orders.push(newOrder);

          // Update the user's cart or handle other changes based on payment status
          if (event.type === 'payment_intent.succeeded') {
              user.cart = []; // Clear the cart after successful payment
          } else if (event.type === 'payment_intent.payment_failed') {
              // Handle payment failure, maybe restore cart items or set an error flag
          }

          await user.save(); // Save the user document with updated orders and cart

          res.status(200).json({ message: 'Order and user updated successfully' });
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
  } else {
      res.status(200).json({ received: true });
  }
});

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
        const token = jwt.sign({userId:user._id, user: user }, process.env.secret_key);
        const redirectUrl = `http://localhost:3000/success?token=${token}&firstName=${user.firstName}&picture=${user.picture}&id=${user._id}`;
        res.redirect(redirectUrl);
    }
);

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

