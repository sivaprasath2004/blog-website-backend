require("dotenv").config();
const mongoose = require("mongoose");
const login = require("../Schema/loginSchema");
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Login = async (req, res) => {
  try {
    let Res = await login.findOne({ Email: req.body.Email });
    if (Res !== null) {
      if (Res.Pass === req.body.Pass) {
        res.send("ok");
      } else {
        res.staus(201).send("Invalid Password");
      }
    } else {
      res.status(201).send("Email id Invalid");
    }
  } catch (err) {
    res.send(err);
  }
};
const signup = async (req, res) => {
  try {
    let Res = await login.findOne({ Email: req.body.Email });
    let Name = await login.findOne({ name: req.body.name });
    if (Res === null && Name === null) {
      let response = await login.create(req.body);
      res.send(response._id);
    } else {
      if (Name == null) {
        res.status(201).send("Email id will be used");
      } else {
        res.status(201).send("UserName will be used");
      }
    }
  } catch (err) {
    res.send(err);
  }
};
module.exports = { Login, signup };
