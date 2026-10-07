import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { DatabaseModule } from 'libs/database';
import { DB_CONNECTION_NAME_SHOPPING_MALL } from 'libs/database/configs/config';
import { CommodityModel } from 'libs/database/configs/models';

@Module({
  imports: [
    DatabaseModule.register({
      db_connection_name: DB_CONNECTION_NAME_SHOPPING_MALL,
      models: [CommodityModel],
    }),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
