'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    title: DataTypes.STRING
  }, {
    underscored: true,
  });
  todo.associate = function(models) {
    // associations can be defined here
  };
  return todo;
};