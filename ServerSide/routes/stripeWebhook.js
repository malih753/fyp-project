const catchAsyncFunction = require("../middlewares/catchAsyncFun");
const InfoModel = require("../model/Infor");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const express = require("express");
const app = express();

const Info = async (req, res) => {
  try {
    const user_id = req.user._id;
    console.log(user_id)
    console.log(req.body);
    console.log(req.body.product);
    const { product } = req.body;
    const {
      name,
      age,
      gender,
      phone_no,
      email,
      street,
      state,
      city,
      country,
      zipcode,
      package_name,
      price,
      message,
    } = product;

    console.log("package name", package_name, message);
    console.log("price", price);
    // Create user in MongoDB
    const newInfo = await InfoModel.create({
      name,
      age,
      gender,
      phone_no,
      email,
      street,
      state,
      city,
      country,
      zipcode,
      user_id,
      package_name,
      price,
      message,
    });

    console.log("newInfo", newInfo);
    return res
      .status(201)
      .json({ message: "Info created successfully", newInfo });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  "whsec_724e011ca657bea85fe2ce2dd2947fcea6e26636413a49af46ac28c13af06ca9";

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        console.log("paymentIntentSucceeded", paymentIntentSucceeded);

        Info(request, response);
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);
