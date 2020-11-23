
import {Request , Response} from 'express'
class UsersController {
    constructor(){

    }


    public index(req : Request , res: Response){
        res.send({allProducts : []})
    }
}

export default UsersController;