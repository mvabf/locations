import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { token } = req.headers;

    if (!token )
        return res.sendStatus(401);

    const tokenParsed = JSON.parse(JSON.stringify(token));

    try {
        jwt.verify(tokenParsed, 'secret');
        
        return next();
    } catch (err) {
        return res.sendStatus(401);
    }
}