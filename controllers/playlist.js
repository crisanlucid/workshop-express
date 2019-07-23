const {Playlist, Song} = require('../models');

const showAllPlaylists = async (req, res, next) => {
  try {
    const foundPlaylists = await Playlist.findAll();
    res.json(foundPlaylists);
  } catch (err) {
    res.json({error: err});
  }
};

// const showAllSongs = (req, res) => {
//   //to do business logic:
//   res.send('everything is ok');
// };

const createPlaylist = async (req, res) => {
  console.log(req.body);
  const {title, genre} = req.body;
  console.log(Playlist);
  const model = await Playlist.create({
    title,
    genre,
  });

  res.json(model);
};

const updatePlaylistById = (deletePlaylistById = getPlaylistById = (
  req,
  res,
) => {
  res.send('ok');
});

module.exports = {
  showAllPlaylists,
  createPlaylist,
  updatePlaylistById,
  deletePlaylistById,
  getPlaylistById,
};
