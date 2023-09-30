const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, "Name is too short"],
      maxLength: [30, "Name is too long"],
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Email is not valid",
      ],
    },
    phoneNumber: {
      type: Number,
      min: [1000000000, "Please enter a valid 10 digit phone number"],
      max: [9999999999, "Please enter a valid 10 digit phone number"],
      required: true,
    },
    password: {
      type: String,
      minlength: [8, "Password must be 8 characters long"],
      required: true,
      select: false,
    },
    cartItems: [{ type: mongoose.Schema.ObjectId, ref: "cart" }],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", userSchema);
module.exports = User;
