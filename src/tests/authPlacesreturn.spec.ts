import supertest from 'supertest';
import server from '../server';

import mongoose from 'mongoose';

/**
 * Test routes with fake token
 */
afterAll(() => {
    mongoose.connection.close();
    server.close();
});


let token = '';

beforeAll((done) => {
    supertest(server)
        .post('/login')
        .send({
            email: 'test@tindin.com',
            password: 'testpassword',
        })
        .end((err, response) => {
            token = JSON.parse(JSON.stringify(response.body.token));
            done();
        });
});


describe('List places with auth', () => {
    it('should respond with a 200 status code', async () => {
        const response = await supertest(server)
            .get('/places')
            .set({ 'token': token, Accept: 'application/json' });

        expect(response.statusCode).toBe(200);
    });
});