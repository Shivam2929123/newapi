const express = require("express");
const router = express.Router();
const ProductDetail = require("../models/productdetail");

// GET all product details
router.get("/", async (req, res) => {
  try {
    const details = await ProductDetail.find();
    res.json(details);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  console.log("Request ID:", req.params.id);

  try {
    const detail = await ProductDetail.findOne({ id: parseInt(req.params.id) });
    console.log("DB Response:", detail);

    if (!detail) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(detail);
  } catch (err) {
    console.error("Error in /productdetail/:id route:", err);
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
