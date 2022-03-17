const express = require('express')
const router = express.Router()

// ---------------------Imports--------------------- //

const Products = require('../controllers/ProductsControllers')
const Category = require('../controllers/CategoryController')
const Brands = require('../controllers/BrandControllers')

// ---------------------AdminRoutes--------------------- //

router.get('/products', express.json(), Products.ShowProducts)
router.get('/category', express.json(), Category.ShowCategory)
router.get('/brands', express.json(), Brands.ShowBrands)

router.post('/products', express.urlencoded(), Products.AddProducts)
router.post('/category', express.urlencoded(), Category.AddCategory)
router.post('/brands', express.urlencoded(), Brands.AddBrands)

// ---------------------LoginRoutes--------------------- //

module.exports = router