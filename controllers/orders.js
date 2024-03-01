const { ctrlWrapper } = require("../helpers");
const { Order } = require("../models/order");

const createOrder = (req, res) => {
  const { name, phone, email, address, order } = req.body;
  const createdOrder = Order.create({ name, phone, email, address, order });
  console.log(createdOrder);
  res.json({ user: { name, phone, email, address }, order });
};

module.exports = {
  createOrder: ctrlWrapper(createOrder),
};
