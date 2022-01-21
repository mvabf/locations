import { Request, Response } from 'express';

import PlaceSchema from '../Models/Place';

class PlacesController {
    public async list(req: Request, res: Response): Promise<Response> {
        return res.json();
    }

    public async store(req: Request, res: Response): Promise<Response> {
        return res.json();
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