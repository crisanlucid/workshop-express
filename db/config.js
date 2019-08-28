const mongoose = require('mongoose');

// uses a database named 'api-design' in de default port 27017.
// to check your port run 'mongo'. Check 'connecting to'.
// e.g: connecting to: mongodb://127.0.0.1:27017
mongoose.connect('mongodb://localhost:27017/api-design', {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
