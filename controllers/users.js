const User = require('../models/User');

const showAllUsers = (req, res, next) => {
	User.find({}, (err, foundUsers) => {
		if (err) {
			res.status(500).json({ error: err });
		}
		res.json({ users: foundUsers });
	});
};

const createUser = (req, res, next) => {
	User.create([req.body], (err, createdUser) => {
		if (err) {
			res.status(500).json({ error: err });
		}
		res.status(201).json({ user: createdUser });
	});
};

const getUserById = (req, res, next) => {
	User.findOne(req.params.id, (err, foundUser) => {
		if (err) {
			res.status(500).json({ error: err });
		}
		res.json({ user: foundUser });
	});
};

const updateUserById = (req, res, next) => {
	User.findById({ _id: req.params.id }, (err, foundUser) => {
		if (err) {
			res.status(500).json({ error: err });
		}
		foundUsers.email = req.body.email;
		foundUsers.password = req.body.password;
		foundUsers.settings = req.body.settings;

		foundUsers.save((error, savedUser) => {
			if (err) {
				res.status(500).json({ error: error });
			}
			res.json({ User: savedUser });
		});
	});
};

const deleteUserById = (req, res, next) => {
	User.deleteOne({ _id: req.params.id }, (err) => {
		if (err) {
			res.status(500).json({ error: err });
		}
		res.json({ message: 'User deleted' });
	});
};

module.exports = {
	createUser,
	showAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
};
