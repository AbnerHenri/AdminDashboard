const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    name : {type : String, required : true},
    description : {type : String, required : true},
    id : {type : String}
})

module.exports = mongoose.model('Category', CategorySchema)