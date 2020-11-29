import { Schema } from "mongoose";


const productOfferItemSchema: Schema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    image: { type: String },
    price: { type: Number }
})

export default productOfferItemSchema;