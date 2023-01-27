
const Product = require('../models/product.js')
const message = require('../constant/message')
//get all products 
// const getAllProducts = async() => {
//     try{
//         let result = await Product.find();
//         return result;
//     }catch(err)
//     {
//         return err;
//     }
// }

// module.exports = {
//     getAllProducts
// }

const queryProduct = async() => {
    try{
        let result = await Product.find();
        return result;
    }catch(err)
    {
        throw err;
    }
}

const queryProductById = async(productId) => {
    try{
        //console.log(productId)
        let result = await Product.findById(productId);
        //console.log('result is showing : ', result)
        //console.log('in dao')
        //console.log(result)
        return result;
    }catch(err)
    {
        throw err;
    }
}

const saveProductDao = async(newProduct) => {
    try{

        let result = await newProduct.save();  
        return result;
        
    }catch(err)
    {
        throw err;
    }
}

const deleteProductDao = async(newProduct) => {
    try{

        let result = await newProduct.remove();  
        return result;
        
    }catch(err)
    {
        throw err;
    }
}


module.exports = {
    queryProduct,
    queryProductById,
    saveProductDao,
    deleteProductDao
}