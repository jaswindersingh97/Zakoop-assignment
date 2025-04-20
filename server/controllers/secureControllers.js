const asyncHandler = require("express-async-handler");
const Order = require("./../models/OrderModel");
const createOrder = async(req,res) =>{
    const {userId} = req.user;
    const {items} = req.body;

    const response = await Order.create({
        userId,items
    });

    res.status(201).json({response,message:"Order created successfully"});
    
}

const getOrders = async(req,res)=>{
    const {userId} = req.user;
    const response = await Order.find({userId}).populate('items.Product');

    res.status(200).json({response})
}

module.exports = {
    createOrder:asyncHandler(createOrder),
    getOrders:asyncHandler(getOrders)
}