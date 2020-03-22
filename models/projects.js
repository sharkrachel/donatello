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
      projectTech: {
        type: DataTypes.STRING,
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
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 22
      }
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
      underscored: true
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
