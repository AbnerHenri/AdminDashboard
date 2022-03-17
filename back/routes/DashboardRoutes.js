const express = require('express')
const router = express.Router()

// ---------------------Imports--------------------- //

const Products = require('../controllers/ProductsControllers')
const Brands = require('../controllers/BrandControllers')
const Categories = require('../controllers/CategoryController')

// ---------------------AdminRoutes--------------------- //

router.get('/products', Products.ShowProducts)
router.get('/category', Categories.ShowCategory)
router.get('/brands', Brands.ShowBrands)

router.post('/products', express.json(), Products.AddProducts)
router.post('/category', express.json(), Categories.AddCategory)
router.post('/brands', express.json(), Brands.AddBrands)

// ---------------------LoginRoutes--------------------- //

module.exports = router