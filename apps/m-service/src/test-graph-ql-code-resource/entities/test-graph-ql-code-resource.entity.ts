import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TestGraphQlCodeResource {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
