const express = require("express");
const router = express.Router();

const {createOrder,getOrders} = require("../controllers/secureControllers");
const validationMiddleware= require("../middleware/validationMiddleware");

router.post("/",validationMiddleware("createOrder"), createOrder);
router.get("/", getOrders);

module.exports = router;