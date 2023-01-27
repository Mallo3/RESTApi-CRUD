const Product = require('../models/product.js')
const message = require('../constant/message')
const productsServices = require('../services/productsServices.js')
const getProducts = ( async(req, res) => {
    try{
        const products = await productsServices.getAllProductsService()
        res.send({...message.successMsgs.all_found_successMsg(),products});
    }catch(err)
    {
        res.send(message.unexpectedErr.DbError());
    }
})

const getProductById = (async(req, res) => {
    try{
        const productId = req.params.id;
        // console.log('productId= ',productId)
        // if(productId==null){
        //     res.send({...message.errMsgs.notExist()});
        // }
        const product = await productsServices.getProductByIdService(productId);
        if(product==null){
            res.send({...message.errMsgs.notExist()});
        }
        res.send({...message.successMsgs.found_successMsg(),product});
    }catch(err)
    {
        res.send(message.unexpectedErr.DbError());
    }
})

const createProduct = (async(req, res) => {


    const newProduct = new Product({
        //productId: Product.length + 1,
        productname: req.body.productname,
        productcode: req.body.productcode,
        description: req.body.description,
        releasedate: req.body.releasedate,
        price: req.body.price,
        rating: req.body.rating,
        imageurl: req.body.imageurl

    })
    try{

        //console.log(newProduct.productcode)
        Product.countDocuments({productcode: newProduct.productcode}, function (err, count){ 
            if(count>0){
                res.send({...message.errMsgs.sameProduct()});
            }
        }); 
        const result = await productsServices.createProductService(newProduct);

        //const a1 = await newProduct.save()
        res.send({...message.successMsgs.add_successMsg(),result});
        //console.log('product data added succesfully')
        

    }catch(err){
        res.send(message.unexpectedErr.DbError());
    }
})

const updateProduct = (async(req, res) => {
    try{
                //const productId = req.params.id
                //const product = await Product.findById(req.params.id)
                const product = await productsServices.getProductByIdService(req.params.id);
                
                product.productname= req.body.productname,
                product.productcode= req.body.productcode,
                product.description= req.body.description,
                product.releasedate= req.body.releasedate,
                product.price= req.body.price,
                product.rating= req.body.rating,
                product.imageurl= req.body.imageurl
        
                //const result = await product.save()
                const result = await productsServices.updateProductService(product)
                res.send({...message.successMsgs.update_successMsg(),result});
                //console.log('product data updated succesfully')
            }catch(err)
            {
                res.send(message.unexpectedErr.DbError());
            }
})

const deleteProduct = (async (req, res) => {
    try{
                const product = await productsServices.getProductByIdService(req.params.id);
                //const result = await product.remove()
                const result = await productsServices.deleteProductService(product)
                //res.json(result)
                res.send({...message.successMsgs.delete_successMsg(),result});
                //console.log('product data deleted succesfully')
            }catch(err)
            {
                res.send(message.unexpectedErr.DbError());
            }
})

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}