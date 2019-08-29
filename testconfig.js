const mongoose = require('mongoose');
const cuid = require('cuid');
const connect = require('./db/connect');
const config = require('./config');
const url = 'mongodb://localhost:27017/intro-mongodb-testing';

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

global.newId = () => {
	return mongoose.Types.ObjectId();
};

async function removeAllCollections() {
	const collections = Object.keys(mongoose.connection.collections);
	for (const collectionName of collections) {
		const collection = mongoose.connection.collections[collectionName];
		await collection.deleteMany();
	}
}

async function dropAllCollections() {
	const collections = Object.keys(mongoose.connection.collections);
	for (const collectionName of collections) {
		const collection = mongoose.connection.collections[collectionName];
		try {
			await collection.drop();
		} catch (error) {
			// Sometimes this error happens, but you can safely ignore it
			if (error.message === 'ns not found') return;
			// This error occurs when you use it.todo. You can
			// safely ignore this error too
			if (error.message.includes('a background operation is currently running')) return;
			console.log(error.message);
		}
	}
}
// Connect to Mongoose
beforeAll(async () => {
	await mongoose.connect(url, { useNewUrlParser: true });
});

// Cleans up database between each test
afterEach(async () => {
	await removeAllCollections();
});

// Disconnect Mongoose
afterAll(async () => {
	await dropAllCollections();
	await mongoose.connection.close();
});
