const Joi = require("joi");

const bodySchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required name field",
  }),
  email: Joi.string().required().messages({
    "any.required": "missing required email field",
  }),
  phone: Joi.number().required().messages({
    "any.required": "missing required phone field",
  }),
  address: Joi.string().required().messages({
    "any.required": "missing required favorite field",
  }),
  order: Joi.object().required().messages({
    "any.required": "missing required email field",
  }),
});

module.exports = bodySchema;
