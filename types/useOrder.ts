export default interface IOrder {
  readonly orderID: string;
  product: string;
  price: number;
  status: string;
}
