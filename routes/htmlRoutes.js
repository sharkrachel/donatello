var db = require("../models");
var path = require("path");
module.exports = function (app) {

  // this is the main page that displays all projects
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/projects.html"));
  });

  app.get("/projects", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/projects.html"));
  });

  // this page will display all projects for a specific user
  app.get("/user/:username/projects", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

};

