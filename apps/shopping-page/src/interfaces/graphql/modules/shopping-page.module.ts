import { Module } from '@nestjs/common';
import { ShoppingPageResolver } from '../resolver/shopping-page.resolver';
import { ShoppingPageService } from '../../../domain/services/shopping-page.service';
import { DatabaseModule } from 'libs/database';
import { DB_CONNECTION_NAME_SHOPPING_MALL } from 'libs/database/configs/config';
import {
  CommodityModel,
  ShoppingCartModel,
  ShoppingHistoryModel,
  ShoppingInvoiceModel,
} from 'libs/database/configs/models';
import { CommodityDatabase } from 'apps/shopping-page/src/infrastructure/database/commodity.database';

@Module({
  imports: [
    DatabaseModule.register([
      {
        db_connection_name: DB_CONNECTION_NAME_SHOPPING_MALL,
        models: [
          CommodityModel,
          ShoppingCartModel,
          ShoppingInvoiceModel,
          ShoppingHistoryModel,
        ],
      },
    ]),
  ],
  providers: [ShoppingPageResolver, ShoppingPageService, CommodityDatabase],
})
export class ShoppingPageModule {}
