import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShoppingPageService } from '../../../domain/services/shopping-page.service';
import { ShoppingPage } from '../../../domain/entities/shopping-page.entity';
import { CreateShoppingPageInput } from '../../../domain/value-objects/dto/create-shopping-page.input';
import { UpdateShoppingPageInput } from '../../../domain/value-objects/dto/update-shopping-page.input';

@Resolver(() => ShoppingPage)
export class ShoppingPageResolver {
  constructor(private readonly shoppingPageService: ShoppingPageService) {}

  @Mutation(() => ShoppingPage)
  createShoppingPage(
    @Args('createShoppingPageInput')
    createShoppingPageInput: CreateShoppingPageInput,
  ) {
    return this.shoppingPageService.create(createShoppingPageInput);
  }

  @Query(() => String)
  BBB() {
    console.log('test');
    return 'sdff';
  }

  // @Query(() => [ShoppingPage], { name: 'shoppingPage' })
  // findAll() {
  //   console.log('all');
  //   return this.shoppingPageService.findAll();
  // }

  // @Query(() => ShoppingPage, { name: 'shoppingPage' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   console.log('one');
  //   return this.shoppingPageService.findOne(id);
  // }

  @Mutation(() => ShoppingPage)
  updateShoppingPage(
    @Args('updateShoppingPageInput')
    updateShoppingPageInput: UpdateShoppingPageInput,
  ) {
    return this.shoppingPageService.update(
      updateShoppingPageInput.id,
      updateShoppingPageInput,
    );
  }

  @Mutation(() => ShoppingPage)
  removeShoppingPage(@Args('id', { type: () => Int }) id: number) {
    return this.shoppingPageService.remove(id);
  }
}
