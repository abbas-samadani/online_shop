import { model, Schema } from "mongoose";
import IProduct from './Iproduct';
import ProductStatus from './productStatus';


const ProductSchema: Schema = new Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    thumbnail: { type: String },
    gallery: { type: [String] },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    status: { type: ProductStatus, default: ProductStatus.INIT }
})

export default model<IProduct>('Product', ProductSchema)