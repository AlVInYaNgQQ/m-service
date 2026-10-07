import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { PaymentAttribute } from '../attributes';

@Table({
  tableName: 'payment',
  createdAt: 'create_time',
  updatedAt: 'modify_time',
})
export class PaymentModel extends Model<PaymentAttribute> {
  @Column({
    primaryKey: true,
    unique: true,
    type: DataType.UUID,
  })
  id: string;

  @Column({
    type: DataType.ENUM(
      'cash',
      'line_pay',
      'jko_pay',
      'google_pay',
      'apple_pay',
    ),
  })
  type_code: 'cash' | 'line_pay' | 'jko_pay' | 'google_pay' | 'apple_pay';

  @Column({
    type: DataType.DATE,
  })
  create_time: Date;

  @Column({
    type: DataType.DATE,
  })
  modify_time: Date;
}
