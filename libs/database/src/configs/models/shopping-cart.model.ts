import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { CommodityModel } from './commodity.model';
import { ShoppingCartAttribute } from '../attributes';

@Table({
  tableName: 'shopping_cart',
  createdAt: 'create_time',
  updatedAt: 'modify_time',
})
export class ShoppingCartModel extends Model<ShoppingCartAttribute> {
  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.UUID,
  })
  id: string;

  @ForeignKey(() => CommodityModel)
  @Column({
    type: DataType.UUID,
  })
  commodity_id: string;

  @Column({
    type: DataType.INTEGER,
  })
  amount: number;

  @Column({
    type: DataType.DATE,
  })
  create_time: Date;

  @Column({
    type: DataType.DATE,
  })
  modify_time: Date;

  @BelongsTo(() => CommodityModel)
  commodity: CommodityModel;
}
