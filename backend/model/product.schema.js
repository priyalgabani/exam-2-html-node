const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    image:String,
    title:String,
    price:String,
    desc:String
})
const product = mongoose.model('Product', productSchema);

module.exports =product