module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define(
    "Projects",
    {
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      projectDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      projectLink: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      projectImage: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    }
  );

  Projects.associate = function(models) {
    Projects.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Projects;
};
