const Product = require('../models/ProductsSchema')
const uuid = require('uuid')

const Products = {

    DeleteItem : async function(req,res){
        const id = await req.params.id

        await Product.findOneAndDelete({id : id})
        res.status(200)
    },

    ShowProducts : async function (req, res){
        const allProducts = await Product.find()
        const filteredProducts =
        allProducts.map( e => { 
            return {
                name : e.name,
                description : e.description,
                price : e.price,
                inventory : e.inventory,
                category : e.category,
                brand : e.brand,
                id : e.id
            }})

            try {
                res.send(filteredProducts)
            } catch (error) {
                res.status(400).send(error)
            }
    },

    AddProducts : async function (req, res){
        const product = new Product({
            name : req.body.name,
            description : req.body.description,
            price : req.body.price,
            inventory : req.body.inventory,
            category : req.body.category,
            brand : req.body.brand,
            id : uuid.v4()
        })

        try {
            await product.save()
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = Products