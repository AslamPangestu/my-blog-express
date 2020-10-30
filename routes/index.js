const express = require("express");
const app = express();

app.use("/articles", require("./article_routes"));
app.use("/users", require("./user_routes"));
app.use("/profile", require("./profile_routes"));

module.exports = app;
