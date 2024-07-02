const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
