const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  name: String,
  Email: String,
  Pass: String,
  Profile: String,
});
module.exports = mongoose.model("signin", loginSchema);
