const Store = require('./../models/StoreModel');
const Product = require('./../models/ProductModel');
const asyncHandler = require('express-async-handler');
const createDummyData = async (req, res) => {
    const store = await Store.create({
      name: 'BigFreshMart',
      location: 'Downtown LA',
      image: 'https://example.com/store.jpg'
    });

    const products = await Product.insertMany([
      {
        name: 'Apples',
        Price: 34.99,
        storeId: store._id,
        image: 'https://example.com/apples.jpg',
        description: 'Fresh organic apples.',
        unit: 'per kg',
        tags: ['organic', 'fruit']
      },
      {
        name: 'Eggs',
        Price: 2.49,
        storeId: store._id,
        image: 'https://example.com/eggs.jpg',
        description: 'Free-range eggs.',
        unit: 'per dozen',
        tags: ['local', 'protein']
      }
    ]);

    res.status(201).json({ store, products });
};

module.exports = { createDummyData: asyncHandler(createDummyData) };
