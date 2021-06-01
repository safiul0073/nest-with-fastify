import * as mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({

    title: {type:String, require: true},
    description: {type:String, require: true,},
    image: {type:String, require: true},
    status: {type:Boolean, default: true}
});
export interface Post extends mongoose.Document{
    id: string,
      title: string;
      description: string;
      image: string;
      status: boolean;
}