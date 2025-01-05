import { DynamicModule, Module } from '@nestjs/common';
import { ModelCtor } from 'sequelize-typescript';
import { dbConfigs } from './db.config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({})
export class DatabaseModule {
  static register(
    config: {
      db_connection_name: string;
      models: string[] | ModelCtor[];
    }[],
  ): DynamicModule {
    const entities: DynamicModule[] = [];
    const sequelizeModuleOptions = config.map(
      ({ db_connection_name, models }) => {
        // eslint-disable-next-line @typescript-eslint/ban-types
        entities.push(SequelizeModule.forFeature(models as Function[]));
        return SequelizeModule.forRoot({
          ...dbConfigs[db_connection_name],
          models,
          autoLoadModels: true,
          synchronize: false,
        });
      },
    );

    return {
      module: DatabaseModule,
      imports: [...sequelizeModuleOptions, ...entities],
      exports: sequelizeModuleOptions,
    };
  }
}
