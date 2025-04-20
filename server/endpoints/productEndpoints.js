const express = require("express");
const router = express.Router({mergeParams: true});

const {getProducts,getProduct} = require("./../controllers/productControllers.js")

router.get("/",getProducts);
router.get("/:productId",getProduct);

module.exports = router;