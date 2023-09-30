const User = require("../models/userModel");
const asyncHandler = require("../middleware/asyncHandler");
const bcrypt = require("bcrypt");
const jwthandler = require("../middleware/jwtHandler");

const userCtrl = {
  register: asyncHandler(async (req, res, next) => {
    const { name, email, phoneNumber, password } = req.body;

    // return;

    const user = await User.findOne({ email });

    if (user) {
      res.status(404);
      throw new Error("User with this email is already registered!");
    }

    if (!name || !phoneNumber || !email || !password) {
      res.status(404);
      throw new Error("Please fill all the fields");
    }

    if (password.length < 8) {
      res.status(404);
      throw new Error("Password must be 8 characters long!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    jwthandler(newUser, res);
  }),

  login: asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(404);
      throw new Error("Missing email or password");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.status(404);
      throw new Error("User with this email does not exist!");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      res.status(404);
      throw new Error("Invalid Email or Password!");
    }

    jwthandler(user, res);
  }),

  me: asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id);

    if (!user) {
      res.status(404);
      throw new Error("User with this email does not exist!");
    }

    jwthandler(user, res);
  }),

  logout: asyncHandler(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.json({ message: "Logged Out Successfully!" });
  }),
};

module.exports = userCtrl;
