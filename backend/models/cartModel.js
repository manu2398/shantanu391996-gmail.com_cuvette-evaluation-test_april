const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  cartItems: {
    qty: { type: Number },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "product",
    },
  },
});

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
