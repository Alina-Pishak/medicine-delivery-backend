const { Schema, model } = require("mongoose");
const handleMongooseError = require("../middlewares/handleMongooseError");

const orderSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: { type: Number, required: [true, "Phone is required"] },
    address: { type: String, required: [true, "Address is required"] },
    order: {
      type: Array,
      required: [true, "Order is required"],
    },
  },
  { versionKey: false }
);

orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);

module.exports = { Order };
