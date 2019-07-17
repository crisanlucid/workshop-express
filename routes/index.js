const {Router} = require('express');

const router = Router();

const {
  showAllPlaylists,
  showAllSongs,
  createPlaylist,
} = require('../controllers/playlist');

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express',
  });
});

router.get('/test', showAllPlaylists);

router.post('/api/v1/playlists', createPlaylist);

module.exports = router;
