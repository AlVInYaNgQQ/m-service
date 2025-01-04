import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ShoppingHistoryModel } from './shopping-history.model';
import { ShoppingInvoiceAttribute } from '../attributes';
import { PaymentModel } from './payment.model';

@Table({
  tableName: 'shopping_invoice',
  createdAt: 'create_time',
  updatedAt: 'modify_time',
})
export class ShoppingInvoiceModel
  extends Model
  implements ShoppingInvoiceAttribute
{
  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.UUID,
  })
  id: string;

  @ForeignKey(() => ShoppingHistoryModel)
  @Column({
    type: DataType.UUID,
  })
  shopping_history_id: string;

  @ForeignKey(() => PaymentModel)
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

  @BelongsTo(() => ShoppingHistoryModel)
  shoppingHistory: ShoppingHistoryModel;

  @BelongsTo(() => PaymentModel)
  payment: PaymentModel;
}
