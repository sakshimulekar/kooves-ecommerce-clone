// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const stripeRoute = express.Router();
const Stripe=require("stripe")
require("dotenv").config()
const stripe = Stripe(process.env.STRIPE_SECRETE_KEY)

stripeRoute.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100000,  // Amount in paisa (1000 INR)
      currency: 'inr',
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.


// stripeRoute.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:3000/checkout-success',
//     cancel_url: 'http://localhost:3000/cart',
//   });

//   res.send({url:session.url});
// });




module.exports={
    stripeRoute
}

