const { ctrlWrapper } = require("../helpers");
const { Order } = require("../models/order");

const createOrder = (req, res) => {
  const { name, phone, email, address, order } = req.body;
  Order.create({ name, phone, email, address, order });
  res.json({ user: { name, phone, email, address }, order });
};

module.exports = {
  createOrder: ctrlWrapper(createOrder),
};
