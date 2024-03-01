const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../middlewares");

const drugSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    shop: {
      type: String,
    },
  },
  { versionKey: false }
);

drugSchema.post("save", handleMongooseError);

const Drug = model("drug", drugSchema);

module.exports = { Drug };
