import { Router } from 'express';
import placesRouter from './places.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/users', userRouter);
router.use('/places', placesRouter);

export default router;