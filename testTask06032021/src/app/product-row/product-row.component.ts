import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @Output() productToEdit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() productToDel: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  edit(product): void {
    this.productToEdit.emit(product);
  }

  delete(product: Product): void {
    this.productToDel.emit(product);
  }
}
