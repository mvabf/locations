import supertest from 'supertest';
import server from '../server';

import mongoose from 'mongoose';

/**
 * Test routes without token
 */

afterAll(() => {
    mongoose.connection.close();
    server.close();
});


describe("places", () => {
    describe("get places route", () => {
        describe("assert that will be return forbidden", () => {
            it("should return a 401", async () => {
                await supertest(server).get('/places').expect(401);
            });
        });
    });
});

describe("places", () => {
    describe("get places route", () => {
        describe("assert that will be return forbidden", () => {
            it("should return a 401", async () => {
                await supertest(server).post('/places').expect(401);
            });
        });
    });
});

describe("places", () => {
    describe("get places route", () => {
        describe("assert that will be return forbidden", () => {
            it("should return a 401", async () => {
                await supertest(server).put('/places').expect(401);
            });
        });
    });
});

describe("places", () => {
    describe("get places route", () => {
        describe("assert that will be return forbidden", () => {
            it("should return a 401", async () => {
                const id = "61eabf5e944f7c26969d6596"
                await supertest(server).get(`/places/${id}`).expect(401);
            });
        });
    });
});

describe("places", () => {
    describe("get places route", () => {
        describe("assert that will be return forbidden", () => {
            it("should return a 401", async () => {
                const id = "61eabf5e944f7c26969d6596"
                await supertest(server).delete(`/places/${id}`).expect(401);
            });
        });
    });
});