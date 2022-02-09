const mongoose = require("mongoose");

const Temprature = new mongoose.model(
  "temprature",
  new mongoose.Schema({
    temperature: String,
    humidity: String,
    timestamp: String,
  })
);

module.exports = Temprature;
