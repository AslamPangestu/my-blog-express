const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://adminBlog:adminBlog123@ds363008.mlab.com:63008/my_blog_aslampangestu",
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
