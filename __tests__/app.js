const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

chai.should();
chai.use(chaiHttp);

/* Test the /GET route */
describe('app index route', () => {
	it('it should GET /', async (done) => {
		const response = await request.get('/');

		expect(response.status).toBe(200);
		done();
	});

	it('it should handle 404 error', async (done) => {
		const response = await request.get('/notExist');
		expect(response.status).toBe(404);
		done();
	});

	it('gets the test endpoint', async (done) => {
		const response = await request.get('/test');

		expect(response.status).toBe(200);
		expect(response.body).toMatchObject({ users: [] });
		done();
	});
});
