import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/Product';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() products: Array<Product>;
  @Input() editedProduct: Product;
  newProduct: Product = {article: 0, id: '', in_stock: 0, name: '', price: 0};

  constructor(private http: HttpClient, private productService: HttpService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    if (this.newProduct.id) {
      this.productService.edit(this.newProduct);
      this.editInFront(this.newProduct);
    } else {
      this.productService.save(this.newProduct).subscribe(productFromDb => {
        this.products.push(productFromDb);
      });
    }
  }

  private editInFront(newProduct: Product): void {
    this.products.splice(
      this.products.findIndex(product => product.id === newProduct.id),
      1, newProduct);
  }
}
