const asyncHandler = require("express-async-handler");
const Store = require("./../models/StoreModel")

const getStores = async(req,res) =>{
    const response = await Store.find().sort({ createdAt: 1 });
    res.status(200).json(response);
}

module.exports = {
    getStores : asyncHandler(getStores),
}