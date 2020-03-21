var db = require("../models");
var path = require("path");
module.exports = function (app) {

app.get("/", function(req, res) {
  res.render(path.join(__dirname, "../views/projects.handlebars"));
});

// app.get("/cms", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/cms.html"));
// });

app.get("/projects", function(req, res) {
  res.render(path.join(__dirname, "../views/projects.handlebars"));
});

app.get("/user", function(req, res) {
  res.render(path.join(__dirname, "../public/users.handlebars"));
});

};
