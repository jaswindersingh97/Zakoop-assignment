const asyncHandler = require('express-async-handler');
const Product = require("./../models/ProductModel")
const getProducts = async(req,res) =>{
    const {storeId} = req.params;

    const products = await Product.find({storeId})

    return res.send(products);
}
const getProduct = async(req,res) =>{
    const { storeId, productId } = req.params;

    const product = await Product.findOne({ storeId, _id: productId });

    if (!product) {
        return res.status(404).json({ message: "Product not found in this store" });
      }

    return res.status(200).json(product);
}
module.exports = {
    getProducts:asyncHandler(getProducts),
    getProduct:asyncHandler(getProduct)
}