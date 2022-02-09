const mongoose = require("mongoose");

const Soil = new mongoose.model(
  "soil",
  new mongoose.Schema({
    moisterPercentage: String,
  })
);

module.exports = Soil;
