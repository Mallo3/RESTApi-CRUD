const productDao = require('../daos/dbOperation')

const getAllProductsService = async() => {
    try{
        let productResult = await productDao.queryProduct();
        return productResult;
    }catch(err)
    {
        return err;
    }
}

const getProductByIdService = async(productId) => {
    try{
        //console.log(productId)
        let productResult = await productDao.queryProductById(productId);
        return productResult;
    }catch(err)
    {
        throw err;
    }
}

const createProductService = async(newProduct) => {
    try{
        //console.log(productId)
        let newProductResult = await productDao.saveProductDao(newProduct);
        return newProductResult;
    }catch(err)
    {
        throw err;
    }
}

const updateProductService = async(product) => {
    try{
        //console.log(productId)
        let newProductResult = await productDao.saveProductDao(product);
        return newProductResult;
    }catch(err)
    {
        throw err;
    }
}

const deleteProductService = async(product) => {
    try{
        //console.log(productId)
        let newProductResult = await productDao.deleteProductDao(product);
        return newProductResult;
    }catch(err)
    {
        throw err;
    }
}

module.exports = {
    getAllProductsService,
    getProductByIdService,
    createProductService,
    updateProductService,
    deleteProductService
}