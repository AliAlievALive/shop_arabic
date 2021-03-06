import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../models/Product';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() products: Array<Product>;
  @Input() editedProduct: Product;
  newProduct: Product = {article: 0, created_date: undefined, id: '', in_stock: 0, name: '', price: 0};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    if (this.newProduct.id) {
      const saveProduct = this.newProduct;
      this.http.put(`http://localhost:8080/products/${this.newProduct.id}`, {saveProduct}).subscribe(data => {
        console.log(data);
      });
    } else {
      this.http.post<Product>('http://localhost:8080/products', this.newProduct).subscribe(data => {
        this.products.push(data);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editedProduct.currentValue) {
      this.newProduct = changes.editedProduct.currentValue;
    }
  }
}
