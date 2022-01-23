import supertest from 'supertest';
import server from '../server';

import mongoose from 'mongoose';

afterAll(() => {
    mongoose.connection.close();
    server.close();
});

const placeId = new mongoose.Types.ObjectId().toString();

const createPlacePayload = { name: "Ceará" };

const updatePlacePayload = {
    name: "Paraná",
    _id: placeId
}

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

describe('list places with token', () => {
    it('should return a 200', async () => {
        await supertest(server).get('/places')
        .set({ 'token': token, Accept: 'application/json' })
        .expect(200);
    });
});

describe('find places with token', () => {
    it('should return a 200', async () => {
        await supertest(server).get(`/places/${placeId}`)
            .set({ 'token': token, Accept: 'application/json' })
            .expect(200);
    });
});

describe('create places with token', () => {
    it('should return a 201', async () => {
        await supertest(server).post('/places')
            .set({ 'token': token, Accept: 'application/json' })
            .send(createPlacePayload)
            .expect(201);
    });
});

describe('update places with token', () => {
    it('should return a 200', async () => {
        await supertest(server).put('/places')
            .set({ 'token': token, Accept: 'application/json' })
            .send(updatePlacePayload)
            .expect(200);
    });
});

describe('delete places with token', () => {
    it('should return a 200', async () => {
        await supertest(server).delete(`/places/${placeId}`)
            .set({ 'token': token, Accept: 'application/json' })
            .expect(200);
    });
});