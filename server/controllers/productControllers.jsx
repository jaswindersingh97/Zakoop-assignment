const asyncHandler = require('express-async-handler');
const Product = require("./../models/ProductModel")
const getProducts = async(req,res) =>{

}

module.exports = {
    getProducts:asyncHandler(getProducts),

}