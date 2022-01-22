import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import UserSchema from '../Models/User';

class UsersController {
    public async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const userToFind = await UserSchema.findOne({ email });

        if (!userToFind)
            return res.status(401).json({ message: 'user does not exists!' });

        const isValidPassword = userToFind.password === password;

        if (!isValidPassword)
            return res.status(401).json({ message: 'wrong password!' });

        const token = jwt.sign({ id: userToFind._id }, 'secret', { expiresIn: '1d' });

        const user = {_id: userToFind._id, name: userToFind.name};

        return res.json({token, user });
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password
        };

        const alreadyExists = await UserSchema.find({ email: email }).exec();

        if (alreadyExists.length > 0)
            return res.json({message: 'User Already Exists.'});

        await UserSchema.create(user);

        return res.status(201).json(user);
    }
}

export default new UsersController();