'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Playlists', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: DataTypes.STRING(128),
      genre: DataTypes.STRING(128),
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Playlists');
  },
};
