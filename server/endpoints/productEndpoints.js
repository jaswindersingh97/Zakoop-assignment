const express = require("express");
const router = express();

const {getProducts,getProduct} = require("./../controllers/productControllers")

router.get("/",getProducts);
router.get("/:productId",getProduct);

module.exports = router