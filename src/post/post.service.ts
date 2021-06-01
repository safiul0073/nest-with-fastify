import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "./post.model";

@Injectable()
export class PostService {
    
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

    async addPost(title:string, description:string, image:string, status:boolean) {
        
        const newPost = new this.postModel({
            title: title, description: description, image: image, status: status
        });
        await newPost.save();
        return "Post Saved!";
    }

    async getPost()  {
        const posts = await this.postModel.find();
        return posts.map((pos) => ({
            id: pos.id,
            title: pos.title,
            description: pos.description,
            image: pos.image,
            status: pos.status
        }));
    }
}