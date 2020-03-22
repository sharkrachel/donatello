module.exports = function (sequelize, DataTypes) {
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
    },

  }, {
    freezeTableName: true, // Model tableName will be the same as the model name
    underscored: true
  });


  Projects.associate = function (models) {
    Projects.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Projects;
};
