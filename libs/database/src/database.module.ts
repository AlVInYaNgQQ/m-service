import { DynamicModule, Module } from "@nestjs/common";
import { DatabaseService } from "./database.service";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { dbConfigs } from "./db.config";

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {
  static register(
    config: SequelizeOptions & { db_connection_name: string },
  ): DynamicModule {
    const dbConfig = dbConfigs[config.db_connection_name];

    const providers = [
      {
        provide: "SEQUELIZE",
        useFactory: async () => new Sequelize(dbConfig),
      },
    ];

    return {
      module: DatabaseModule,
      providers,
      exports: providers,
    };
  }
}
