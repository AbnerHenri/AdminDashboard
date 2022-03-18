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

router.post('/products', express.urlencoded({ extended : false }), Products.AddProducts)
router.post('/category', express.urlencoded({ extended : false }), Categories.AddCategory)
router.post('/brands', express.urlencoded({ extended : false }), Brands.AddBrands)

// ---------------------LoginRoutes--------------------- //

module.exports = router