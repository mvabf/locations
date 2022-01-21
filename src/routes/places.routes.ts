import { Router } from 'express';

import PlacesController from '../controllers/PlacesController';
import authMiddleware from '../middlewares/authMiddleware';

const placesRouter = Router();

placesRouter.get('/', authMiddleware, PlacesController.list);
placesRouter.post('/', authMiddleware, PlacesController.store);
placesRouter.get('/:id', authMiddleware, PlacesController.find);
placesRouter.put('/', authMiddleware, PlacesController.update);
placesRouter.delete('/:id', authMiddleware, PlacesController.destroy);


export default placesRouter;