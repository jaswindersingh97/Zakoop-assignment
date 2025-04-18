const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        index:true,
    },
    items:
        [
            {
                Product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true
                },
                qty:{
                    type:Number,
                    required:true
                }   
            }
        ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true
  });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;