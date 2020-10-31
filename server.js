//https://dev.to/nidaslife23/crud-operations-in-express-nodejs-and-mongodb-3fog
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Parse Content Type: JSON
app.use(bodyParser.json());

//Initialize Routes
app.use(require("./routes"));

app.listen(8000);
console.log("Listening to PORT 8000");
