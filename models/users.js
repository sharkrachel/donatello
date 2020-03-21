module.exports = function(sequelize, DataTypes) {
    //create a user table
    var User = sequelize.define("User", {
        name: DataTypes.STRING
    });

    //connect the user to the projects
    User.associate = function(models) {
        //when a user is deleted, all their projects will be deleted too
        User.hasMany(models.Projects, {
            onDelete: "cascade"
        });
    };

return User;
};