const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const authRoute = require("./Routes/Auth");
app.use("/api/user", authRoute);

app.get("/api", (req, res) => {
  res.send("Entering Piero Letters");
});

//TODO Mongo Connection
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("connect to DB");
  }
);

//?Server Listener
app.listen(10000, () => console.log("Server Running"));
