import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { CommodityAttribute } from '../attributes';

@Table({
  tableName: 'commodity',
  createdAt: 'create_time',
  updatedAt: 'modify_time',
})
export class CommodityModel
  extends Model<CommodityAttribute>
  implements CommodityAttribute {
  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.UUID,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.NUMBER,
  })
  amount: number;

  @Column({
    type: DataType.NUMBER,
  })
  remaining_quantity: number;

  @Column({
    type: DataType.NUMBER,
  })
  description: number;

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.DATE,
  })
  create_time: Date;

  @Column({
    type: DataType.DATE,
  })
  modify_time: Date;
}
