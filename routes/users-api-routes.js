var db = require("../models");
module.exports = function(app) {

  app.get("/api/user/:username", function(req, res) {
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
      })
 
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