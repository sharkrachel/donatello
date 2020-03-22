var db = require("../models");

module.exports = function (app) {
  // GET route to get all the projects
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

  // this will find only a single project - not sure if we need this
  app.get("/api/projects/:id", function (req, res) {
    db.Projects.findAll({
      where: {
        user: req.params.id
      },
      include: [db.Projects]
    })
      .then(function (dbProjects) {
        res.json(dbProjects);
      });
  });

  // POST route for saving a new project
  app.post("/api/projects", function (req, res) {
    db.Projects.create(req.body)
      .then(function (dbProjects) {
        res.json(dbProjects);
      });
  });

  // DELETE route for deleting projects
  app.delete("/api/projects/:id", function (req, res) {
    db.Projects.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbProjects) {
        res.json(dbProjects);
      });
  });

  // PUT route for updating projects
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
