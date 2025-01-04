import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTestGraphQlCodeResourceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
