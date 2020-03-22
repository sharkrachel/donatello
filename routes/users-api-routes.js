module.exports = function (app) {
   // GET route to display all projects by a specific user
    app.get("/api/user", function (req, res) {
        db.User.findAll({
            include: [db.Projects]
        })
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });

    app.get("/user/:id", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [dbProjects]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/user", function (req, res) {
        db.User.create(req.body)
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });

    app.delete("/api/user/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });
};