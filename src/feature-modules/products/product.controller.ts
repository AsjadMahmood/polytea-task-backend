import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller()
export class ProductController
{
    constructor(private readonly productService: ProductService) { }

    @Post()
    createProduct(): any
    {
        // return this.productService.getHello();
    }
}
