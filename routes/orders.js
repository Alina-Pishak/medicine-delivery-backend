const express = require("express");
const orders = require("../controllers/orders");
const { validateBody } = require("../middlewares");
const schemas = require("../schemas");

const router = express.Router();

router.post("/", validateBody(schemas.bodySchema), orders.createOrder);

module.exports = router;
