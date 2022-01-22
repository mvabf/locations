import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

import PlaceSchema from '../../Models/Place';

export default async function validateUpdatePayload(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        _id: Joi.string().required(),
        name: Joi.string().required()
    });

    const { _id, name } = req.body;

    const place = await PlaceSchema.findById(_id);

    if (place.name === name)
        return res.status(400).json({ message: 'Place names are equal!' });

    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {

        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}