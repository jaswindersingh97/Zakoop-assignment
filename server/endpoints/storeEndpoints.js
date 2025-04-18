const express = require("express");
const router = express();

const {getStores} = require("./../controllers/storeControllers");

router.get("/",getStores);

module.exports = router;