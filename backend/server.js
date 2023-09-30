require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//mongoose connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting MongoDB", err.reason));

//test route

//routes
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

//errorHandler middlewares
app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  console.log(path.join(__dirname, "..", "/frontend/build"));
  app.use(express.static(path.join(__dirname, "..", "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "..", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.json("Hey!");
  });
}

const PORT = 1234 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
