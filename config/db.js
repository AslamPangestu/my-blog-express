const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config");

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", (err) => {
  console.error(
    "Failed to Establish Connection with MongoDB with Error: " + err
  );
});
db.once("open", () => {
  console.log("Successfully Established Connection with MongoDB");
});

module.exports = mongoose;
