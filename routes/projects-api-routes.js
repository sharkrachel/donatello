var db = require("../models");

module.exports = function(app) {
  // GET route to get all the projects
  app.get("/api/projects", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }

    db.Project.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // this will find only a single project - not sure if we need this
  app.get("/api/projects/:id", function(req, res) {
    db.Project.findAll({
      where: {
        user: req.params.id
      },
      include: [db.Project]
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // POST route for saving a new project
  app.post("/api/projects", function(req, res) {
    console.log("req.body: ", req.body);
    db.Project.create(req.body).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // DELETE route for deleting projects
  app.delete("/api/projects/:id", function(req, res) {
    db.Project.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // PUT route for updating projects
  app.put("/api/projects", function(req, res) {
    db.Project.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });
};
