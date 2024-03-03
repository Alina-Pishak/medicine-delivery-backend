const express = require("express");
const drugs = require("../controllers/drugs");

const router = express.Router();

router.get("/", drugs.getDrugs);

router.get("/shops", drugs.getMedicineShops);

module.exports = router;
