import { Request, Response } from 'express';

import PlaceSchema from '../Models/Place';
import unsplash from '../services/unsplashRequestService';

class PlacesController {
    public async list(req: Request, res: Response): Promise<Response> {
        return res.json();
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;

        try {
            const response = await unsplash.get("photos/random", {
                params: { query: name }
            });

            const place = {
                name,
                photo: response.data.urls.small
            }

            const placeCreated = await PlaceSchema.create(place);

            return res.json(placeCreated);

        } catch(err) {
            return res.json({error: err})
        }
    }

    public async find(req: Request, res: Response): Promise<Response> {
        return res.json();
    }

    public async update(req: Request, res: Response): Promise<Response> {
        return res.json();
    }

    public async destroy(req: Request, res: Response): Promise<Response> {
        return res.json();
    }
}

export default new PlacesController();