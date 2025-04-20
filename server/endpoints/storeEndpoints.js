const express = require("express");
const router = express.Router({mergeParams: true});

const {getStores} = require("./../controllers/storeControllers.js");
const productEndpoints = require("./productEndpoints.js");

router.get("/",getStores);
router.use("/:storeId/products",productEndpoints);

module.exports = router;