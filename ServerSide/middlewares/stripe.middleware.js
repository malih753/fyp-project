const catchAsyncFun = require("./catchAsyncFun");

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const stripeController = catchAsyncFun(async (req, res, next) => {
  try {
    const { product } = req.body;
  
    const lineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product?.package_name,
          },
          unit_amount: Number(product?.price) * 100,
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/",
      cancel_url: "http://localhost:5173/",
    });

    res.json({ id: session.id });
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = stripeController;
