var db = require("../models");
module.exports = function(app) {
  // GET route to display all projects by a specific user
  app.get("/api/user", function(req, res) {
    db.User.findAll({
      include: [db.Projects]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.get("/api/user/:username", function(req, res) {
    db.User.findOne({
      where: {
        name: req.params.username
      }
    }).then(function(data) {
        res.json(data.dataValues.id);  
      })
  });

  app.get("/api/user/:username/projects", function(req, res) {
    // console.log("req.params: ", req.params);
    db.User.findOne({
      where: {
        name: req.params.username
      }
    }).then(function(dbUser) {
      // console.log("dbUser: ", dbUser)
      db.Project.findAll({
        where: {
          UserId: dbUser.dataValues.id
        }
      })
      .then(function(data) {
        res.json(data);
        // console.log("data: ", data[0]);
        
      })
 
    });
  });
  app.get("/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [dbProjects]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};