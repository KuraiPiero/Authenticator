const router = require("express").Router();
const Joi = require("@hapi/joi");
const User = require("../models/registrationForm");

router.get("/", (req, res) => {
  res.send("Entering registration");
});

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
    .alphanum()
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

router.post("/userreg", async (req, res) => {
  const { error } = await schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    genre: req.body.genre,
    adress: req.body.adress,
    password: req.body.password,
    date: req.body.date
  });
  console.log(user);
  try {
    const usersave = await user.save();
    res.send({
      usersave
    });
  } catch (err) {
    res.status(400).send(err);
  }
  console.log("Registered");
});

router.post("/userlog", (req, res) => {
  res.send("register");
});
module.exports = router;
