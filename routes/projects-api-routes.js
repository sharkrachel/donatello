var db = require("../models");

module.exports = function (app) {
  app.get("/api/projects", function (req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }

    db.Projects.findAll({
      where: query,
      include: [db.User]
    })
      .then(function (dbProjects) {
        res.json(dbProjects);
      });
  });
  app.get("/api/projects/:id", function (req, res) {
    db.Projects.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Projects]
    })
      .then(function (dbProjects) {
        res.json(dbProjects);
      });
  });

  app.post("/api/projects", function (req, res) {
    db.Projects.create(req.body)
      .then(function (dbProjects) {
        res.json(dbProjects);
      });
  });

  app.delete("/api/posts/:id", function (req, res) {
    db.Projects.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbProjects) {
        res.json(dbProjects);
      });
  });

  app.put("/api/projects", function (req, res) {
    db.Projects.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbProjects) {
        res.json(dbProjects);
      });
  });
};
