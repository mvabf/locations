import mongoose from 'mongoose';

mongoose.connect("mongodb://tindinauth:tindinauth@localhost:27017/tindinauth?authSource=admin");

// mongoose.connection.on('error', () => console.error('connection error: '));
// mongoose.connection.once('open', () => console.log('database connected!'));