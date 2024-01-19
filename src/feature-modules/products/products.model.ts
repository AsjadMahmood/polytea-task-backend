import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooSchema } from 'mongoose';
export type ProductDocument = Product & Document;

@ObjectType()
@Schema()
export class Product
{
  @Field(() => String)
  _id: MongooSchema.Types.ObjectId;

  @Field((type) => Int)
  @Prop()
  id: number;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  title: string;

  @Field({ nullable: true })
  @Prop()
  description?: string;

  @Field()
  @Prop()
  price: number;

  @Field()
  @Prop()
  discountPercentage: number;

  @Field()
  @Prop()
  rating: number;

  @Field()
  @Prop()
  stock: number;

  @Field()
  @Prop()
  brand: string;

  @Field()
  @Prop()
  category: string;

  @Field()
  @Prop()
  thumbnail: string;

  @Field((type) => [String])
  @Prop()
  images: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
