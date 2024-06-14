const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
    require: true,
  },
  title: {
    type: DataTypes.STRING,
    require: true,
  },
  description: {
    type: DataTypes.STRING,
    require: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
    require: false,
  },
});

module.exports = Task;
