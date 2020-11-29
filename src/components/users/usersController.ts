
import { Request, Response } from 'express'
import User from './model/User';
class UsersController {
    constructor() {

    }


    public async index(req: Request, res: Response) {
        const users = await User.find();
        res.send({ users })
    }

    public async create(req: Request, res: Response) {
        const newUser = await User.create({
            first_name: 'Abbas',
            last_name: 'Samadani',
            email: 'a.samadani@yahoo.com',
            mobile: '09179675771'
        });

        newUser.addressess?.push({
            title: 'Home',
            state : 'London',
            city : 'London',
            address : 'nansen village',
            zip_code : '123456789',
            full_name : 'moosavi',
            mobile : '09179674585'
        })

        await newUser.save();
        res.send({newUser})
    }
}

export default UsersController;