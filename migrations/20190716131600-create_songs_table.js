'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('songs', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      playlist_id: DataTypes.INTEGER(11),
      title: DataTypes.STRING(128),
      artist: DataTypes.STRING(128),
      album_picture: DataTypes.STRING(255),
      youtube_url: DataTypes.STRING(128),
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('songs');
  },
};
