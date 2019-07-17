'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING(128),
    genre: DataTypes.STRING(128),
  });

  Playlist.associate = models => {
    Playlist.hasMany(models.Song, {
      foreignKey: 'playlist_id',
      foreignKeyConstraint: true,
    });
  };

  return Playlist;
};
foreignKeyConstraint: true;
