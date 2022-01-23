import supertest from 'supertest';
import server from '../server';

import mongoose from 'mongoose';

afterAll(() => {
    mongoose.connection.close();
    server.close();
});

describe("list places without token", () => {
    it("should return a 401", async () => {
        await supertest(server).get('/places').expect(401);
    })
});

describe("find places without token", () => {
    it("should return a 401", async () => {
        await supertest(server).get('/places/61eb6eab17403508213f1d71').expect(401);
    })
});

describe("create places without token", () => {
    it("should return a 401", async () => {
        await supertest(server).post('/places').expect(401);
    })
});

describe("update places without token", () => {
    it("should return a 401", async () => {
        await supertest(server).put('/places').expect(401);
    })
});

describe("delete places without token", () => {
    it("should return a 401", async () => {
        await supertest(server).delete('/places/61eb6eab17403508213f1d71').expect(401);
    })
});

