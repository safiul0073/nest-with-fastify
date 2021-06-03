import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./prodcut.model";
import { ProductDto } from './product.dto'

@Injectable()
export class ProductService {
    constructor(@InjectModel("Product") private readonly productModel: Model<Product>) {}

    async addProduct(productDto: ProductDto) {
        const product = new this.productModel(productDto);
        await product.save();
        return "success";
    }
}