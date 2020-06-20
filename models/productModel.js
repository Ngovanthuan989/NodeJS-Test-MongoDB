var mongoose = require('../config/dbConnect');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productCode: String,
    productName: String,
    productCategory: String,
    productPrice: Number,

}, {
    collection: 'products'
});

var ProductModel = mongoose.model('products', ProductSchema);

ProductModel.create({
    productCode: 'SMT01',
    // productName,
    // productCategory,
    // productPrice,

}).then(function(data) {
    console.log(data);
})


module.exports = ProductModel;