import { Module } from '@nestjs/common';
import { ShoppingPageResolver } from '../resolver/shopping-page.resolver';
import { ShoppingPageService } from '../../../domain/services/shopping-page.service';

@Module({
  providers: [ShoppingPageResolver, ShoppingPageService],
})
export class ShoppingPageModule {}
