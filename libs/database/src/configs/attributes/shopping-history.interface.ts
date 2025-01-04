export interface ShoppingHistoryAttribute {
  id: string;
  commodities: object[];
  amount: number;
  payment_id: string;
  create_time: Date;
  modify_time: Date;
}
