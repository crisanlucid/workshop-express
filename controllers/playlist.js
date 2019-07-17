const {Playlist, Song} = require('../models');

const showAllPlaylists = (req, res, next) => {
  Playlist.findAll()
    .then(foundPlaylists => res.json(foundPlaylists))
    .catch(err => res.json({error: err}));
};

const showAllSongs = (req, res) => {
  //to do business logic:
  res.send('everything is ok');
};

const createPlaylist = async (req, res) => {
  console.log(req.body);
  const {title, genre} = req.body;
  console.log(Playlist);
  const model = await Playlist.create({
    title,
    genre,
  });

  const query = await Playlist.findAll();
  res.json(query);
};

module.exports = {showAllPlaylists, showAllSongs, createPlaylist};
