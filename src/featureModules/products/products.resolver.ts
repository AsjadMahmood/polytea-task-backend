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
  async books(): Promise<Product[]>
  {
    return this.productService.findAll();
  }

  @Query(() => Product)
  async book(@Args('id', { type: () => ID }) id: string): Promise<Product>
  {
    return this.productService.findOne(id);
  }
}
