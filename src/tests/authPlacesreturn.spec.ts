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