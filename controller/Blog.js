require("dotenv").config();
const mongoose = require("mongoose");
const blogs = require("../Schema/BlogSchema");
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Blog = async (req, res) => {
  await blogs.create(req.body);
  res.stauts(200).send("ok");
};
module.exports = { Blog };
