import { Document } from 'mongoose';

export default interface IUser extends Document {

    first_name: string;
    last_name: string;
    email: string;
    mobile: number;
    total_orders?: number;
    wallet?: number;
    addressess?: [object]
    created_at?: Date;
}