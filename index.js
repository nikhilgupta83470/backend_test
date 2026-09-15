
require('dotenv').config()
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello word ");
});
app.get("/login", (req, res) => {
  res.send("hii user  word ");
});
app.get("/twiter", (req, res) => {
  res.send("<h1> welcome to twiter word</h1> ");
});
app.listen(process.env.port, () => {
  console.log("app listen on port :", port);
});

