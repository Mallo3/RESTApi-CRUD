const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    // productId: {
    //     type: Sequelize.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true,
    // },

    productname: {
        type : String,
        required : true
    },
    productcode: {
        type : String,
        required : true,
        unique: true
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