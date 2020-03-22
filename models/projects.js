module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define(
    "Project",
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

  Project.associate = function(models) {
    Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Project;
};
