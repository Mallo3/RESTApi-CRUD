const express = require('express')
const router = express.Router()
const { validateDbId, raiseRecord404Error } = require('../middleware/validation');

const  { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct 
} = require('../controllers/productsControllers.js')

router.get('/', getProducts)

router.get('/:id', validateDbId, getProductById)

router.post('/', createProduct) 

router.put('/:id', validateDbId, updateProduct) 

router.delete('/:id', validateDbId, deleteProduct)

module.exports = router


// const getAll = require('../controllers/products.js')
// import {
//     getAll
//   } from "../controllers/users.js";

// router.get('/', async(req,res) => {
//     try{

//         const products = await Product.find()
//         res.json(products)
//     }catch(err)
//     {
//         res.send('Error ' + err)
//     }
// })

// // router.get('/', getAll)
// router.get('/:productId', async(req,res) => {
//     try{

//         const product = await Product.findById(req.params.id)
//         res.json(product)
//     }catch(err)
//     {
//         res.send('Error ' + err)
//     }
// })

// router.post('/', async(req,res)=>{
//     const product = new Product({
//         productname: req.body.productname,
//         productcode: req.body.productcode,
//         description: req.body.description,
//         releasedate: req.body.releasedate,
//         price: req.body.price,
//         rating: req.body.rating,
//         imageurl: req.body.imageurl

//     })

//     try{
//             const a1 = await product.save()
//             res.json(a1)
//     }catch(err){
//         res.send('Error, must have done something wrong')
//     }
// })

// router.patch('/:id', async(req,res) =>{
//     try{
//         const product = await Product.findById(req.params.id)
        
//         product.productname= req.body.productname,
//         product.productcode= req.body.productcode,
//         product.description= req.body.description,
//         product.releasedate= req.body.releasedate,
//         product.price= req.body.price,
//         product.rating= req.body.rating,
//         product.imageurl= req.body.imageurl

//         const a1 = await product.save()
//         res.json(a1)
//     }catch(err)
//     {
//         res.send('Error')
//     }
// })

// router.delete('/:id', async(req,res) =>{
//     try{
//         const product = await Product.findById(req.params.id)
//         const a1 = await product.remove()
//         res.json(a1)
//     }catch(err)
//     {
//         res.send('Error')
//     }
// })

// module.exports = router
// // export default router
