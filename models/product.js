const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({

    productname: {
        type : String,
        required : true
    },
    productcode: {
        type : String,
        required : true
    },
    description: {

        type: String,
        required: true
    },
    releasedate: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    }


})

module.exports = mongoose.model('Product', productSchema)