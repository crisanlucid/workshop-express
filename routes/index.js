const {Router} = require('express');

const router = Router();

const {showAllPlaylists} = require('../controllers/playlist');

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express',
  });
});

router.get('/test', showAllPlaylists);

module.exports = router;
