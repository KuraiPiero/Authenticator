const router = require("express").Router();
const User = require("../models/registrationForm");
const { registrationValidator } = require("../validator");
router.get("/", (req, res) => {
  res.send("Entering registration");
});

router.post("/userreg", async (req, res) => {
  const { error } = registrationValidator(req.body);
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
