import { Body, Controller, Get, Post, Req, Request, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import multer from "fastify-multer/lib/lib/content-parser";
import { FastifyMultipartAttactFieldsToBodyOptions } from "fastify-multipart";
import {PostService} from "./post.service";


@Controller("post")
export class PostController {
    
    constructor(private readonly postService: PostService,) {}

    // @Post()
    // @UseInterceptors(FileInterceptor('file'))
    // create(@UploadedFile() file ){
    //     console.log(file)
    // }

    @Get()
    async getData() {
        
        const datas = await this.postService.getPost();
        return datas;
        
    }

   
}