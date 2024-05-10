'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      blog.belongsTo(models.user, {
        foreignKey: 'owner'
    });
    }
  }
  blog.init({
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    owner: DataTypes.INTEGER,
    image: DataTypes.BLOB,
    likes: DataTypes.INTEGER,
    comments: DataTypes.TEXT,
    comments_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'blog',
  });
  return blog;
};