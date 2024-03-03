const { ctrlWrapper } = require("../helpers");
const { Drug } = require("../models/drug");

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

module.exports = {
  getDrugs: ctrlWrapper(getDrugs),
};
