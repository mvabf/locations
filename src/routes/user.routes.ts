import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const userRouter = Router();

userRouter.post('/create', UsersController.store);
userRouter.post('/login', UsersController.login);


export default userRouter;