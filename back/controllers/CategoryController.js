const Category = require('../models/CategorySchema')
const uuid = require('uuid')

const Categories = {

    DeleteCategory : async function (req,res){
        const id = await req.params.id

        await Category.findOneAndDelete({ id : id})
        res.status(200)
    },

    ShowCategory : async function (req, res){
        const allCategories = await Category.find()
        const filteredCategories = allCategories.map( e => { 
            return {name : e.name, description : e.description, id : e.id}
        })

        try {
            res.send(filteredCategories)
        } catch (error) {
            res.status(400).send(error)
        }
        
    },

    AddCategory : async function (req, res){

    if(req.body.name && req.body.description != ''){
        const category = new Category({
            name : req.body.name,
            description : req.body.description,
            id : uuid.v4()
        })
        
        try {
            await category.save()
        } catch (error) {
            console.log(error)
        }
    }
}

}

module.exports = Categories