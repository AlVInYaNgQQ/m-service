import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ShoppingPage {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
