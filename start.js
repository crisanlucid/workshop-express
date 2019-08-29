const app = require('./app');
const config = require('./config.js');
const connect = require('./db/connect');

const port = config.PORT;
console.log(config.DOCKER_MONGODB);
connect(config.DOCKER_MONGODB)
	.then(() =>
		app.listen(port, () => {
			console.log(`Server is listening on ${port}`);
		}),
	)
	.catch((e) => console.error(e));
