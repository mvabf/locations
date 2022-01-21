import { Router } from 'express';
import placesRouter from './places.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/login', userRouter);
router.use('/places', placesRouter);

export default router;