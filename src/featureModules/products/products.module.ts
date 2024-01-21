import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './products.service';
import { ProductResolver } from './products.resolver';
import { Product, ProductSchema } from './products.model';
import { ProductController } from './product.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductResolver],
})
export class ProductModule { }
