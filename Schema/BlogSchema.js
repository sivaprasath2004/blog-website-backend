const mongoose = require("mongoose");
const Blogs = new mongoose.Schema({
  Image: String,
  Title: String,
  Des: String,
  Tags: [String],
  Date: String,
});
module.exports = mongoose.model("blogs", Blogs);
