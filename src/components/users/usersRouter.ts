import {Router} from 'express'
import userController from './usersController';
const usersControllerInstanse = new userController;
const usersRouter : Router = Router();

usersRouter.get('/' , usersControllerInstanse.index)
usersRouter.post('/' , usersControllerInstanse.create)


export default usersRouter;

