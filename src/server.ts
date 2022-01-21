import express from 'express';
import router from './routes';
import './database/db';

const app = express();
app.use(express.json());
app.use(router);

const server = app.listen(3000, () => {
    console.log('backend started!');
});

export default server;

