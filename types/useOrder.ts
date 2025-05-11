export default interface IOrder {
  readonly orderID: string;
  product: string;
  payment: string;
  orderDate: string;
  price: number;
  status: string;
}
