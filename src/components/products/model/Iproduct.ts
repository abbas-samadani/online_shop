import {Document} from 'mongoose';

export default interface IProduct extends Document{
    title : string,
    price: number,
    thumbnail : string,
    gallery ?: [string],
    created_at : Date,
    updated_at : Date,
    status : number
}

