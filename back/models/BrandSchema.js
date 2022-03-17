const mongoose = require('mongoose')

const BrandSchema = mongoose.Schema({
    name : {type : String, required : true},
    id : {type : String}
})

module.exports = mongoose.model('Brand', BrandSchema)