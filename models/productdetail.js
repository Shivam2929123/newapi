const mongoose = require('mongoose');

const productDetailSchema = new mongoose.Schema({

  id: { type: Number, required: true, unique: true },

  title: { type: String, required: true, trim: true },

  price: { type: Number, required: true },

  description: { type: String, required: true },

  brand: { type: String, required: true },

  category: { type: String, required: true },

  stock: { type: Number, default: 0 },

  images: [{ type: String, required: true }],

  highlights: [{ type: String }],

  specifications: [
    {
      key: String,
      value: String
    }
  ],

  rating: {
    rate: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  }

}, { timestamps: true });

module.exports = mongoose.model('ProductDetail', productDetailSchema);
