module.exports = function (sequelize, DataTypes) {
  //a table that holds the project name, technologies used, project link and an image for the project.
  var Projects = sequelize.define("Projects", {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    projectTech: {
      type: DataTypes.STRING,
      allowNull: false
    },
    projectLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    projectImage: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  //add foregin key to projects object so it can be connected to the individual user
  Projects.associate = function (models) {
    Projects.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Projects;
};
