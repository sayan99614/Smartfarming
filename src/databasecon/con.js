const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dheeman:sayan123456789@cluster0.rs8y8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
