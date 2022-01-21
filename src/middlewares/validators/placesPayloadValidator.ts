import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default function validatePayload(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        name: Joi.string().required()
    });

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