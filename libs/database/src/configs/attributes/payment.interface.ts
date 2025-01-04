export interface PaymentAttribute {
  id: string;
  type_code: 'cash' | 'line_pay' | 'jko_pay' | 'google_pay' | 'apple_pay';
  create_time: Date;
  modify_time: Date;
}
