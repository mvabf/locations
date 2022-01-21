import { Router } from 'express';

import PlacesController from '../controllers/PlacesController';
import authMiddleware from '../middlewares/authMiddleware';
import validatePayload from '../middlewares/validators/placesPayloadValidator';

const placesRouter = Router();

placesRouter.get('/', authMiddleware, PlacesController.list);
placesRouter.post('/', authMiddleware, validatePayload, PlacesController.store);
placesRouter.get('/:id', authMiddleware, PlacesController.find);
placesRouter.put('/', authMiddleware, PlacesController.update);
placesRouter.delete('/:id', authMiddleware, PlacesController.destroy);


export default placesRouter;