const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send({ msg: "app is running 👍" });
});

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
