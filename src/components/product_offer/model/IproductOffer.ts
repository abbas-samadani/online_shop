import { Document } from "mongoose";


export default interface IProductOffer extends Document{
    product : [object]
    start_date : Date,
    end_Date : Date,
    created_at : Date

}