var db = require("../models");
var path = require("path");
module.exports = function (app) {

  // this is the main page that displays all projects
  app.get("/", function (req, res) {
    res.render(path.join(__dirname, "../views/projects.handlebars"));
  });

  // app.get("/cms", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/cms.html"));
  // });

  // i don't think we need this because our main page displays all the projects, but I commented it out in case we do need it.

  // app.get("/projects", function (req, res) {
  //   res.render(path.join(__dirname, "../views/projects.handlebars"));
  // });

  // this page will display all projects for a specific user
  app.get("/user", function (req, res) {
    res.render(path.join(__dirname, "../public/users.handlebars"));
  });

};
