import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Product } from './products.model';
import { ProductService } from './products.service';

@Resolver(() => Product)
export class ProductResolver
{
  constructor(private readonly productService: ProductService) { }

  @Query(() => [Product], { name: 'randomProducts' })
  async getRandomNumericData(): Promise<Product[]> 
  {
    return this.productService.getRandomNumericData();
  }

  @Query(() => [Product], { name: 'products' })
  async getProducts(): Promise<Product[]>
  {
    return this.productService.findAll();
  }

  @Query(() => Product, { name: 'productById' })
  async getProductById(@Args('id', { type: () => ID }) id: string): Promise<Product>
  {
    return this.productService.findOne(id);
  }

}