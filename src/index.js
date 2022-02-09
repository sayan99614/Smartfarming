const express = require("express");
const { saveSensorData } = require("./service/Service.js");
const app = express();
app.use(express.json());
const port = 4000 || process.env.port;

app.get("/", (req, res) => {
  res.send({ msg: "app is running 👍" });
});

app.post("/api/savedata", (req, res) => {
  const data = req.body;
  try {
    saveSensorData(data);
    res.status(201).send({ msg: "data saved successfully" });
  } catch (error) {
    res.status(500).send({ err: "data could not be saved" });
  }
});

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
