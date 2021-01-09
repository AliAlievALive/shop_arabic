export class Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  created: Date;

  constructor(id: number, name: string, price: number, stock: number, created: Date) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.created = created;
  }
}
