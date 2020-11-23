import {Router} from 'express'
import productController from './productsController';
const productControllerInstanse = new productController;
const userRouter : Router = Router();

userRouter.get('/' , productControllerInstanse.index)


export default userRouter;

