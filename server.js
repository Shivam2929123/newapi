const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
                                                                 
const Product= require('./models/productsmodel')
const app = express()
app.use(express.json())
app.use(cors());
app.listen(3000, () => {
    console.log('connected to port no 3000')
})
app.get('/products', async(req, res) => {
    try {
        const product=await Product.find({});
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
})
app.post('/products', async(req, res) => {
    try {const product=await Product.create(req.body);
        res.status(200).json(product)
        
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})

        
    }
   

  
})
mongoose.connect("mongodb+srv://shivam:9WJIZ5XK9EhI1xCW@cluster0.zhe080s.mongodb.net/collect?retryWrites=true&w=majority")
.then(() => {
    console.log('db connected')
   

}).catch(() => {
    console.log(error.message)
})