const express = require("express");
const app = express();

app.get("/people", (req, res) => {
  res.status(200).send("Lolo");
});

app.listen(3000, (req, res) => {
  console.log("Listening on port 3000");
});
