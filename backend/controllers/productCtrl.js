const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/productModel");

const productCtrl = {
  getProducts: asyncHandler(async (req, res, next) => {
    let query;

    const reqQuery = { ...req.query };

    const removeFields = ["keyword", "sort"];

    removeFields.forEach((p) => delete reqQuery[p]);

    let queryString = JSON.stringify(reqQuery);
    queryString = queryString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );

    const keyword = req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: "i" } }
      : {};

    query = Product.find({ ...JSON.parse(queryString), ...keyword });

    if (req.query.sort) {
      query = query.sort(req.query.sort);
    }

    const products = await query;
    res.json(products);
  }),

  getProductByID: asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      res.status(404);
      throw new Error("Resource not found!");
    }

    res.json(product);
  }),
};

module.exports = productCtrl;
