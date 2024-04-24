const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("image"), (req, res) => {
  const imageFile = req.file;
  console.log(imageFile);
  res.send("Image uploaded successfully");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
