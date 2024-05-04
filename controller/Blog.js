require("dotenv").config();
const mongoose = require("mongoose");
const blogs = require("../Schema/BlogSchema");
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Blog = async (req, res) => {
  await blogs.create(req.body);
  res.status(200).send("ok");
};
const Blogs = async (req, res) => {
  let result = await blogs.find({});
  res.status(200).send(result);
};
module.exports = { Blog, Blogs };
