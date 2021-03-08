import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/Product';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products;
  product: Product;
  @Output() productDel: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit(): void {
  }

  editProduct(productFromRow): void {
    this.product = productFromRow;
  }

  deleteProduct(deleteProduct: Product): void {
    this.productDel.emit(deleteProduct);
  }
}
