const express = require("express");
const orderCtrl = require("../controllers/orderCtrl");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.route("/new").post(authMiddleware, orderCtrl.createOrder);
router.route("/get-single").get(authMiddleware, orderCtrl.getSingleOrder);

module.exports = router;
