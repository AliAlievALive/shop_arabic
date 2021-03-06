import { Component } from '@angular/core';
import {Product} from './models/Product';
import {HttpService} from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  products: Array<Product>;
  productToUpdate: Product;

  constructor(private http: HttpService) {
    this.products = this.http.getProducts();
  }

  getProductsFromServer(): void {
    this.products = this.http.getProducts();
  }

  updatedProduct(productToUpdate: Product): void {
    this.productToUpdate = productToUpdate;
  }

  deleteProduct(product: Product): void {
    this.http.delete(product.id);
    this.products.splice(this.products.indexOf(product), 1);
  }
}
