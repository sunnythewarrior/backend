const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ message: "Hello Rian's" });
});
app.listen(3000);
