const {Router} = require('express');

const router = Router();

const {
  createPlaylist,
  showAllPlaylists,
  getPlaylistById,
  updatePlaylistById,
  deletePlaylistById,
} = require('../controllers/playlist');

//CRUD
router.post('/playlists', createPlaylist);
router.get('/playlists', showAllPlaylists);
router.get('/playlists/:playlistId', getPlaylistById);
router.patch('/playlists/:playlistId', updatePlaylistById);
router.delete('/playlists/:playlistId', deletePlaylistById);

module.exports = router;
