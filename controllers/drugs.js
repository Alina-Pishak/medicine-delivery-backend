const { ctrlWrapper } = require("../helpers");
const { Drug } = require("../models/drug");

const getDrugs = async (req, res) => {
  const allDrugs = await Drug.find();
  res.json(allDrugs);
};

module.exports = {
  getDrugs: ctrlWrapper(getDrugs),
};
