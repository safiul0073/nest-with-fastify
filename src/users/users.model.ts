import { Document } from "mongoose";
import * as mongoose from "mongoose";

export const UsersSchema = new mongoose.Schema({
    name: {type: String, require:true},
    username: {type: String},
    password: {type: String, require:true}
})

export interface Users extends Document{
    id: string;
    name: string;
    username: string;
    password: string;

}