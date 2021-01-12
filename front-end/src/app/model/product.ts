export class Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  dateCreated: Date;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}
