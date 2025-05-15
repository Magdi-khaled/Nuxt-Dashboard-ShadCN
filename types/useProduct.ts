export default interface IProduct {
  readonly productID: string;
  preview: string;
  otherImages: string[];
  name: string;
  description: string;
  price: number | null;
  sale?: number | null;
  quantity: number | null;
  category: string;
  colors: string[];
  sizes: string[];
  createdDate: string;
}
