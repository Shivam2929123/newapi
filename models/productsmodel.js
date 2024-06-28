const mongoose=require('mongoose')
const productSchema=mongoose.Schema(
    {
       
        title:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        rating:[
            {
            type:Array,
            rate:5,
            count:48
        }

            
        ],

    },
    {
        timestamps:true
    }

)
const Product=mongoose.model('product',productSchema);
module.exports=Product
