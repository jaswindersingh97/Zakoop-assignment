const mongoose = require('mongoose');
const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location:{
        type: String,
        trim: true,
    },
    image: { 
        type: String 
    },
    rating: {
        type: Number,
        default: 4.5 
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

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;