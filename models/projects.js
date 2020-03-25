module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    projectDescription: {
      type: DataTypes.TEXT,
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

  Project.associate = function(models) {
    Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Project;
};
