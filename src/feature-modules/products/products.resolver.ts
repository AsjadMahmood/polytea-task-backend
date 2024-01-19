import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Product } from './products.model';
import { ProductService } from './products.service';

@Resolver(() => Product)
export class ProductResolver
{
  constructor(private readonly bookService: ProductService) { }

  @Query(() => [Product])
  async books(): Promise<Product[]>
  {
    return this.bookService.findAll();
  }

  @Query(() => Product)
  async book(@Args('id', { type: () => ID }) id: string): Promise<Product>
  {
    return this.bookService.findOne(id);
  }
}
