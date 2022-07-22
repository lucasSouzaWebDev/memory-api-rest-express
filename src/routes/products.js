const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }))

const productModel = require('../models/product')

router.get('/', (req, res) => {
    res.send(productModel.getProducts())
})

router.get('/:id', (req, res) => {
    res.send(productModel.getProduct(req.params.id))
})

router.post('/', (req, res) => {
    const product = productModel.saveProduct({
        name: req.body.name,
        price: req.body.price,
    })
    res.send(product)
})

router.put('/:id', (req, res) => {
    const product = productModel.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price,
    })
    res.send(product)
})

router.delete('/:id', (req, res) => {
    const product = productModel.deleteProduct(req.params.id)
    res.send(product)
})

module.exports = router