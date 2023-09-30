const asyncHandler = require("./asyncHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(404);
    throw new Error("Please login first!");
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decode.id);

  next();
});

module.exports = authMiddleware;
