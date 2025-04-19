const express = require("express");
const router = express();

const {getStores} = require("./../controllers/storeControllers");
const productEndpoints = require("./productEndpoints");

router.get("/",getStores);
router.use("/:storeId/products",productEndpoints);

module.exports = router;