const { ctrlWrapper, HttpError } = require("../helpers");
const { Drug } = require("../models/drug");
const fs = require("fs");
const path = require("path");

const getDrugs = async (req, res) => {
  const { shop, sort } = req.query;
  const searchConditions = {
    shop: {},
    sort: {},
  };
  if (shop) {
    searchConditions.shop = { shop };
  }
  if (sort) {
    searchConditions.sort = {
      price: (sort === "cheap" && 1) || (sort === "expensive" && -1),
    };
  }
  const allDrugs = await Drug.find(searchConditions.shop).sort(
    searchConditions.sort
  );
  res.json(allDrugs);
};

const getMedicineShops = (req, res) => {
  const medicineShopsPath = path.join(__dirname, "../data/shops.json");
  const medicineShopsBuffer = fs.readFileSync(medicineShopsPath);
  const medicineShops = JSON.parse(medicineShopsBuffer);
  if (!medicineShops) {
    throw HttpError(404, "Not found");
  }
  res.json(medicineShops);
};

module.exports = {
  getDrugs: ctrlWrapper(getDrugs),
  getMedicineShops: ctrlWrapper(getMedicineShops),
};
