const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.get('/api/v1/resume', (req, res) => {
  res.status(304).end();
});

const listResume = require('./config.js');
const config = require('./configuration/config');

// Passport session setup.
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

/* config is our configuration variable. */
passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebook_api_key,
      clientSecret: config.facebook_api_secret,
      callbackURL: config.callback_url,
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => {
        // Check whether the User exists or not using profile.id
        if (config.use_database) {
          // Further code of Database.
        }
        return done(null, profile);
      });
    },
  ),
);

app.use(
  '/stylesheets',
  express.static(`${__dirname  }/node_modules/bootstrap-social`),
);
app.use(
  '/stylesheets',
  express.static(`${__dirname  }/node_modules/font-awesome/css/`),
);
app.use(
  '/stylesheets',
  express.static(`${__dirname  }/node_modules/bootstrap/dist/css`),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', key: 'sid' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`));

const ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

app.get('/', (req, res) => {
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, (req, res) => {
  res.render('account', { user: req.user });
});

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('/');
  },
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/api/v1/user', (req, res) => {
  res.json(listResume);
});

app.get('/api/v1/user/:id', (req, res) => {
  res
    .status(404)
    .send(`user ID is ${req.params.id}, query string params: ${req.query.q}`);
});

app.post('/api/v1/user', (req, res) => {
  console.log(req.body);

  // to do: query in DB
  res.status(200).json({ name: req.body.name });
});

app.get(/wcs/, (req, res) => {
  res.send('regex');
});

app.listen(9000, () => {
  console.log('- loading... port 9000');
});

// // error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the errseor page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
