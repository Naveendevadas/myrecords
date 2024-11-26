const mongoose=require('mongoose')
const category = require("./category")


let Products = new mongoose.Schema({
   sellerID : {
       type : mongoose.Schema.Types.ObjectId,
       ref : "users"
   },
   name: {
       type: String,
       // required: true,
       trim: true
   },
   description: {
       type: String,
       // required: true
   },
   price: {
       type: Number,
       // required: true,
       min: 0
   },
   
   brand: {
       type: String,
       // required: true
   },
   stock: {
       type: Number,
       // required: true,
       min: 0,
       default: 0
   },
   images: [
       {
           url: { type: String, required: true },
           alt: { type: String }
       }
   ],
   category :{
       type : mongoose.Schema.Types.ObjectId,
       ref : "category"

   }
});
module.exports =mongoose.model("products",Products)