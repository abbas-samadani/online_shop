
import { Request, Response } from 'express'
import User from './model/User';
class UsersController {
    constructor() {

    }


    public index(req: Request, res: Response) {
        res.send({ allUsers: [] })
    }

    public async create(req: Request, res: Response) {
        const newUser = await User.create({
            first_name: 'Abbas',
            last_name: 'Samadani',
            email: 'a.samadani@yahoo.com  ',
            mobile: '09179675771'
        });
        res.send({ newUser })
    }
}

export default UsersController;