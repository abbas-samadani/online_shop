import { model, Schema } from "mongoose";
import ICoupon from './ICoupon';
import CouponStatus from './CouponStatus';


const CouponSchema: Schema = new Schema({
    code : {type : String , required : true},
    amount : {type : Number , required : true},
    limit : {type : Number , default : 0},
    used : {type : Number , default : 0},
    expire_at : {type : Date , default : null},
    constraints : {type : Object , default : null},
    status : {type : CouponStatus , default : CouponStatus.ACTIVE}
})

export default model<ICoupon>('Coupon' , CouponSchema)