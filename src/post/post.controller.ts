import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import {PostService} from "./post.service";
const util = require('util')
const path = require('path')
const { pipeline } = require('stream')
const fs = require('fs');
const pump = util.promisify(pipeline)
@Controller("post")
export class PostController {
    
    constructor(private readonly postService: PostService,) {
        
    }
    @Post()
    async create(@Req() req,
                // @Body('title') title: string,
                // @Body('description') description: string,
                // @Body('image') image: File,
                // @Body('status') status: boolean
    ){
            
            // const data = await req.file();

            // data.file // stream
            // data.fields // other parsed parts
            // const name = data.fieldname
            // data.filename
            // data.encoding
            // data.mimetype
            // await pump(data.file, fs.createWriteStream(data.filename))
            // // reply.send()
            // const newPost = this.postService.addPost(title, description, image, status);
            // return newPost;
    }

    @Get()
    async getData() {
        
        const datas = await this.postService.getPost();
        return datas;
        
    }

   
}