const Brand = require('../models/BrandSchema')
const uuid = require('uuid')

const Brands = {

    ShowBrands : async function (req, res){
        const allBrands = await Brand.find()
        const filteredBrands = allBrands.map( e => { return {name : e.name, id : e.id}})

        try {
            res.send(filteredBrands)
        } catch (error) {
            res.status(400).send(error)
        }
        
    },

    AddBrands : async function (req, res){
        const brand = new Brand({
            name : req.body.name,
            id : uuid.v4()
        })

        try {
            await brand.save()
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = Brands