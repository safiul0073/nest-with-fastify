import { Body, Controller, Post } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './product.service';
import { ValidationPipe } from './validation.pip'
@Controller('product')
export class ProductController {
     constructor(private readonly productService: ProductService) {}

    @Post()
    async create(@Body(new ValidationPipe()) producDto: ProductDto) {
        const result = await this.productService.addProduct(producDto);
        return result;
     }
}
