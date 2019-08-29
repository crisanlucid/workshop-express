const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

const connect = (url) =>
	mongoose.connect(url, {
		useNewUrlParser: true,
	});

module.exports = connect;
