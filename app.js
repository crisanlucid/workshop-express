const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
const port = 8000;

const superheroes = [
  { id: 1, name: 'Profesor X' },
  { id: 2, name: 'Spiderman' },
  { id: 3, name: 'Shazam' },
];

app.get('/api/v1/superheroes', (req, res) => {
  res.json(superheroes);
});

app.post('/api/v1/superheroes', (req, res) => {
  const lastItem = superheroes[superheroes.length - 1];
  const lastId = lastItem.id;
  const sport = {
    id: lastId + 1,
    name: req.body.name,
  };
  superheroes.push(sport);

  res.status(201).json(superheroes);
});

app.put('/api/v1/superheroes/:id', (req, res) => {
  const superhero = superheroes.find(
    target => target.id === parseInt(req.params.id),
  );
  superhero.name = req.body.name;
  res.status(202).json(superhero);
});

app.patch('/api/v1/superheroes/:id', (req, res) => {
  console.log('to do');
});

app.delete('/api/v1/superheroes/:id', (req, res) => {
  const superhero = superheroes.find(
    target => target.id === parseInt(req.params.id),
  );
  const index = superheroes.indexOf(superhero);
  superheroes.splice(index, 1);
  res.status(202).json(superhero);
});

app.get(/wcs/, (req, res) => {
  res.send('regex');
});

app.listen(port, () => {
  console.log(`- loading... port ${port}`);
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
