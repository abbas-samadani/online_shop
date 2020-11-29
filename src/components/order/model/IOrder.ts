import { Document } from 'mongoose';
import orderStatus from './orderStatus';

export default interface IOrder extends Document {


    user: object,
    total_price : number,
    coupon : object,
    final_price: number,
    orderLine : [object],
    status : orderStatus,
    delivery_address : object,
    created_at : Date,
    updated_at : Date

}