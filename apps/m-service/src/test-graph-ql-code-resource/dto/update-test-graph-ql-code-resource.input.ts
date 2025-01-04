import { CreateTestGraphQlCodeResourceInput } from './create-test-graph-ql-code-resource.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTestGraphQlCodeResourceInput extends PartialType(
  CreateTestGraphQlCodeResourceInput,
) {
  @Field(() => Int)
  id: number;
}
