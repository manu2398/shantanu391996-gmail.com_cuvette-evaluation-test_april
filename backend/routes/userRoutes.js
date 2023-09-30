const express = require("express");
const userCtrl = require("../controllers/userCtrl");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/me", authMiddleware, userCtrl.me);
router.post("/logout", authMiddleware, userCtrl.logout);

module.exports = router;
