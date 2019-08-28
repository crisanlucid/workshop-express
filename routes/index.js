const {Router} = require('express');

const router = Router();

const {showAllUsers} = require('../controllers/users');

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express',
  });
});

router.get('/test', showAllUsers);

module.exports = router;
