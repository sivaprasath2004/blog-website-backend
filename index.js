const express = require("express");
const multer = require("multer");
const cors = require("cors");
const body_parser = require("body-parser");
const app = express();
const { Blog, Blogs } = require("./controller/Blog");
const { Login, signup } = require("./controller/login");
const port = 5000;
app.use(cors());
app.use(body_parser.json({ limit: "5mb" }));
app.use(body_parser.urlencoded({ extended: true }));
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("image"), (req, res) => {
  const imageFile = req.file;
  console.log(imageFile);
  res.send("Image uploaded successfully");
});
app.post("/blogs", Blogs);
app.post("/login", Login);
app.post("/signup", signup);
app.post("/Blog", Blog);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
