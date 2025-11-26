const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const sellerSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required:true
        },
        shopname:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        address:{
            type:String,
            required:true
        }


    }
)
const sellerDetails = mongoose.model('seller',sellerSchema )
module.exports = sellerDetails;