const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/api/v1/resume', (req, res) => {
  res.status(304).end();
});

const listResume = require('./config.js');

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
