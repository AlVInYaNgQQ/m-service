import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CommodityAttribute } from "../attributes";

@Table({
  tableName: "commodity",
  createdAt: "create_time",
  updatedAt: "modify_time",
})
export class CommodityModel extends Model<CommodityAttribute> {
  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.UUIDV4,
  })
  id: string;

  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.STRING,
  })
  name: string;

  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.NUMBER,
  })
  amount: number;

  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.NUMBER,
  })
  remaining_quantity: number;

  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.NUMBER,
  })
  description: number;

  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.DATE,
  })
  create_time: Date;

  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.DATE,
  })
  modify_time: Date;
}
