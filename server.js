const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");
const compression = require("compression");

const app = express();

app.use(compression());
app.use(express.static(__dirname + "/client/static"));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

app.get("/client/static/js/funStuff.js", function(req, res) {
  res.sendFile(path.join(__dirname + "/client/static/js/funStuff.js"));
});

var routes_setter = require("./server/config/routes.js");
routes_setter(app);

app.listen(8001);
