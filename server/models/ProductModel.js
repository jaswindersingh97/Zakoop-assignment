const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    Price:{
        type: Number,
        required: true,
    },
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Store',
        index:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        select:false
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        select:false
    },
},{
    timestamps: true
  });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;