import { CreateShoppingPageInput } from './create-shopping-page.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateShoppingPageInput extends PartialType(
  CreateShoppingPageInput,
) {
  @Field(() => Int)
  id: number;
}
