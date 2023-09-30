require("dotenv").config();
const mongoose = require("mongoose");
const products = require("./data/products");
const Product = require("./models/productModel");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting MongoDB", err.reason));

const importData = async () => {
  try {
    await Product.insertMany(products);
    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log("Data deleted");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}
