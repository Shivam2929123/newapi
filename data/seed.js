const mongoose = require('mongoose');
const Product = require('../models/productsmodel');
const productsData = require('./productsData');
const ProductDetail = require('../models/productdetail')
const ProductData = require('./productDetail')
const MONGO_URI = "mongodb+srv://shivam:9WJIZ5XK9EhI1xCW@cluster0.zhe080s.mongodb.net/collect?retryWrites=true&w=majority";

async function seedData() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(' Connected to MongoDB');

    await Product.deleteMany();
    await Product.insertMany(productsData);
    console.log(' Inserted all products successfully');

    await ProductDetail.deleteMany();
    await ProductDetail.insertMany(ProductData);
    console.log('Inserted all product details succesfully')

    mongoose.connection.close();
    console.log(' Connection closed');
  } catch (error) {
    console.error(' Seeding Error:', error.message);
  }
}

seedData();
