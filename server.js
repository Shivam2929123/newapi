const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/product.routes");
const productDetailRoutes = require("./routes/productDetail.routes");

const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/products", productRoutes);
app.use("/product-details", productDetailRoutes);

// START Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// DB Connection
mongoose
  .connect("mongodb+srv://shivam:9WJIZ5XK9EhI1xCW@cluster0.zhe080s.mongodb.net/collect?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error.message));
