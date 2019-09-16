const Joi = require("@hapi/joi");

//Registration Validator
const registrationValidator = data => {
  const schema = Joi.object({
    firstName: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    lastName: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    userName: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .min(3)
      .max(30)
      .required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] }
    }),
    genre: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    adress: Joi.string()
      .min(3)
      .max(30)
      .required()
  });
  return schema.validate(data);
};

//Login Validator

const loginValidator = data => {
  const schema = Joi.object({
    userName: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .min(3)
      .max(30)
      .required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
  });
  return schema.validate(data);
};

module.exports.registrationValidator = registrationValidator;
module.exports.loginValidator = loginValidator;
