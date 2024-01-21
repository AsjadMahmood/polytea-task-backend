import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './products.model';

@Injectable()
export class ProductService
{
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) { }

  async create(createProductDto: any): Promise<ProductDocument>
  {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async getRandomNumericData(): Promise<Product[]>
  {
    const randomProduct = await this.productModel.aggregate([{ $sample: { size: 4 } }]);
    return randomProduct;
  }

  async findAll(): Promise<Product[]>
  {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product>
  {
    return this.productModel.findById(id).exec();
  }
}