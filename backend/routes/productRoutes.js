const express = require("express");
const productCtrl = require("../controllers/productCtrl");

const router = express.Router();

router.route("/").get(productCtrl.getProducts);

router.route("/:id").get(productCtrl.getProductByID);

module.exports = router;
