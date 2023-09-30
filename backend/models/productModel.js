const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    cover: {
      type: String,
    },
    brand: {
      type: String,
    },
    description: {
      type: String,
    },
    longDescription: {
      type: String,
    },
    price: {
      type: Number,
    },
    countInStock: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    color: {
      type: String,
    },
    featured: {
      type: Boolean,
    },
    headphoneType: {
      type: String,
    },
    images: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
