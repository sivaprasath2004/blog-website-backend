require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Blog = (req, res) => {
  console.log(req.body);
  res.send("ok");
};
module.exports = { Blog };
