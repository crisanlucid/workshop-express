'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
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

  Song.associate = models => {
    Song.belongsTo(models.Playlist, {
      as: 'Song',
      foreignKey: 'playlist_id',
    });
  };

  return Song;
};
