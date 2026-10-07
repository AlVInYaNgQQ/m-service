import { Module } from '@nestjs/common';
import { ShoppingPageModule } from './interfaces/graphql/modules/shopping-page.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/shopping-page/schema.gql'),
      debug: true,
      playground: true,
    }),
    ShoppingPageModule,
  ],
})
export class AppModule {}
