import { model, Schema } from "mongoose";
import orderStatus from './orderStatus';
import IOrder from './IOrder';
import orderLine from './orderLine';

const orderSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    total_price: { type: Number, required: true },
    coupon: { type: Object, default: null },
    final_price: { type: Number, required: true },
    ordeLine : {type : [orderLine] },
    status: { type: orderStatus, required: true, default: orderStatus.INIT },
    delivery_address: {type : Object , default : null},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

export default model<IOrder>('order' , orderSchema)