const router = require("express").Router();
const User = require("../models/registrationForm");

router.get("/", (req, res) => {
    res.send("Entering registration");
  });

  router.get("/userreg", (req, res) => {
    res.send("Entering registration 2");
  });
router.post("/userreg", async (req, res) => {
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
    res.json({
      usersave
    });
    console.log("Registered");
  } catch (err) {
    res.json({
      message: err
    });
  }
});

router.post("/userlog", (req, res) => {
  res.send("register");
});
module.exports = router;
