const User = require('../models/User');

describe('User model', () => {
	test('email must be required', async () => {
		expect.assertions(1);

		try {
			await User.create({
				password: 'myPassword',
				settings: {
					theme: 'dark',
					notifications: true,
					compactMode: false,
				},
			});
		} catch (e) {
			expect(e).toBeTruthy();
		}
	});
	test('password must be required', async () => {
		expect.assertions(1);

		try {
			await User.create({
				email: 'user@gmail.com',
				settings: {
					theme: 'dark',
					notifications: true,
					compactMode: false,
				},
			});
		} catch (e) {
			expect(e).toBeTruthy();
		}
	});

	test('email must be unique', async () => {
		expect.assertions(1);

		try {
			await User.init(); // wait for index to build
			await User.create([
				{
					email: 'email@yahoo.com',
					password: 'pass_1',
					settings: {
						theme: 'dark_1',
						notifications: true,
						compactMode: false,
					},
				},
				{
					email: 'email@yahoo.com',
					password: 'pass_2',
					settings: {
						theme: 'dark_1',
						notifications: true,
						compactMode: false,
					},
				},
			]);
		} catch (e) {
			expect(e).toBeTruthy();
		}
	});

	test('email must be trim', async (done) => {
		try {
			await User.init(); // wait for index to build
			const { _id, __v, ...user } = (await User.create({
				email: '   email1@yahoo.com   ',
				password: 'lalala',
				settings: {
					theme: 'dark',
					notifications: true,
					compactMode: false,
				},
			})).toObject();
			expect(user.email).toEqual('email1@yahoo.com');
		} catch (e) {
			expect(e).toBeTruthy();
		}
		done();
	});

	test('should have correct fields', async (done) => {
		try {
			await User.init(); // wait for index to build
			const now = Date.now();
			const { _id, __v, ...user } = (await User.create({
				email: '   email@yahoo.com   ',
				password: 'lalala',
				settings: {
					theme: 'dark',
					notifications: true,
					compactMode: false,
				},
			})).toObject();

			const passwordHash = user.password;
			delete user.password;
			delete user.createdAt;
			delete user.updatedAt;
			expect(user).toMatchObject({
				email: 'email@yahoo.com',
				settings: {
					theme: 'dark',
					notifications: true,
					compactMode: false,
				},
			});

			const checkPass = bcrypt.compare(password, passwordHash, (err, same) => {
				if (err) {
					return reject(err);
				}

				resolve(same);
			});

			expect(checkPass('lalala', passwordHash)).toBeTruthy();
		} catch (e) {
			console.log(e);
			expect(e).toBeTruthy();
		}
		done();
	});
});
