export default interface IProduct {
  readonly productID: string;
  preview: string;
  otherImages: string[];
  name: string;
  description: string;
  price: number;
  sale?: number;
  quantity: number;
  category: string;
  colors: string[];
  sizes: string[];
  createdDate: string;
}
