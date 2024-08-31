const express = require("express");
const cors = require("cors");

const app = express();
const port = 2399;

app.use(cors());

app.listen(port, () => {
  console.log("Server listening on port: ", port);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
