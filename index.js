const express = require('express')
const mongoose = require('mongoose')
const url =  'mongodb://localhost/Product201'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

app.use(express.json())

const productRouter = require('./routes/products')
app.use('/products', productRouter)

app.listen(9000, function(){
    console.log('Server started')
})