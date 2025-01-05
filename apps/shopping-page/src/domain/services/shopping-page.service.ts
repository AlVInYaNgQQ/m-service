import { Injectable } from '@nestjs/common';
import { CreateShoppingPageInput } from '../value-objects/dto/create-shopping-page.input';
import { UpdateShoppingPageInput } from '../value-objects/dto/update-shopping-page.input';

@Injectable()
export class ShoppingPageService {
  create(createShoppingPageInput: CreateShoppingPageInput) {
    return 'This action adds a new shoppingPage';
  }

  findAll() {
    return `This action returns all shoppingPage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingPage`;
  }

  update(id: number, updateShoppingPageInput: UpdateShoppingPageInput) {
    return `This action updates a #${id} shoppingPage`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingPage`;
  }
}
