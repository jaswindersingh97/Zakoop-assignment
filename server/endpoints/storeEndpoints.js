const express = require("express");
const router = express.Router();

const {getStores} = require("./../controllers/storeControllers.js");
const productEndpoints = require("./productEndpoints.js");

router.get("/",getStores);
router.use("/:storeId/products",productEndpoints);

module.exports = router;