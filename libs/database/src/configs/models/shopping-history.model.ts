import { Column, DataType, Model, Table, HasOne } from 'sequelize-typescript';
import { ShoppingHistoryAttribute } from '../attributes';
import { ShoppingInvoiceModel } from './shopping-invoice.model';

@Table({
  tableName: 'shopping_history',
  createdAt: 'create_time',
  updatedAt: 'modify_time',
})
export class ShoppingHistoryModel
  extends Model
  implements ShoppingHistoryAttribute
{
  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.UUID,
  })
  id: string;

  @Column({
    type: DataType.JSON,
  })
  commodities: object[];

  @Column({
    type: DataType.INTEGER,
  })
  amount: number;

  @Column({
    type: DataType.UUID,
  })
  payment_id: string;

  @Column({
    type: DataType.DATE,
  })
  create_time: Date;

  @Column({
    type: DataType.DATE,
  })
  modify_time: Date;

  @HasOne(() => ShoppingInvoiceModel)
  shoppingInvoice: ShoppingInvoiceModel;
}
