import { Request, Response } from 'express';

import PlaceSchema from '../Models/Place';
import unsplash from '../providers/unsplashRequestProvider';

class PlacesController {
    public async list(req: Request, res: Response): Promise<Response> {
        const { page = 1, limit = 50, search, order='name' } = req.query;

        try {
            const places = await PlaceSchema.find()
                .limit(<any>limit * 1)
                .sort(order)
                .skip((<any>page - 1) * <any>limit)
                .exec();

            const count = await PlaceSchema.countDocuments();

            const listOfPlacesFilter = search ? places.filter(place => place.name.includes(search)) : places;

            return res.json({ listOfPlacesFilter, totalPages: Math.ceil(count / <any>limit),currentPage: page });
            
        } catch (err: any) {
            return res.status(404).json(err.message);
        }
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

            return res.status(201).json(placeCreated);

        } catch(err: any) {
            return res.json({error: err.message})
        }
    }

    public async find(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
          const place = await PlaceSchema.findById(id);

          return res.json(place);

        } catch (err: any) {
            return res.status(404).json({ error: err.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { _id, name } = req.body;

        try {
            const response = await unsplash.get("photos/random", {
                params: { query: name }
            });

            const placeToUpdate = {
                name,
                photo: response.data.urls.small
            }

            await PlaceSchema.findOneAndUpdate({_id}, placeToUpdate);

            const place = await PlaceSchema.findById(_id);

            return res.json(place);

        } catch (err: any) {
            return res.status(404).json({ error: err.message });
        }
    }

    public async destroy(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            await PlaceSchema.findByIdAndDelete(id);

            return res.sendStatus(204);

        } catch(err: any) {
            return res.status(400).json({ error: err.message })
        }
    }
}

export default new PlacesController();