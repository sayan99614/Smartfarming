const Soil = require("../models/Soil.js");
const Temprature = require("../models/Temprature.js");
require("../databasecon/con");
function saveSensorData(data) {
  const soil = new Soil({
    moisterPercentage: data.moisterpercentage,
  });
  const temp = new Temprature({
    temperature: data.temperature,
    humidity: data.humidity,
    timestamp: new Date().toLocaleString,
  });

  soil.save((err) => {
    if (err) {
      throw new Error(" soil data could not be saved");
    }
  });

  temp.save((err) => {
    if (err) {
      throw new Error(" temprature data could not be saved");
    }
  });
}

module.exports = {
  saveSensorData: saveSensorData,
};
