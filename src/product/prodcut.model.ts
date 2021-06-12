import * as mongoose from "mongoose"
import { Document } from "mongoose"

export const ProductSchema = new mongoose.Schema({
    name: {type: String, require:true},
    description: {type: String},
    price: {type: Number, require:true}
})

export interface Product extends Document{
    id:string;
    name: string;
    description:string;
    price:number
}