const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name : {type : String, required : true},
    description : {type : String, required : true},
    price : {type : Number, required : true},
    inventory : {type : Number, required : true},
    category : {type : String, required : true},
    brand : {type : String, required : true},
    id : {type : String}
})

module.exports = mongoose.model('Product', ProductSchema)