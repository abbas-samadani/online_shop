import { model , Schema } from "mongoose";
import IProductOffer from './IproductOffer';
import productOfferItemSchema from './productOfferItem';

const productOfferSchema : Schema = new Schema({
    product : {type : [productOfferItemSchema] , required : true},
    start_date : {type : Date , required : true},
    end_date : {type : Date , required : true},
    created_at : {type : Date , default : Date.now}
})

export default model<IProductOffer>('ProductOffer' , productOfferSchema)