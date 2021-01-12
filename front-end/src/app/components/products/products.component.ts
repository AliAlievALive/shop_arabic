import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  message: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      }
    );
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex(product => product.id == id);
    this.productService.deleteProduct(id).subscribe(() => {
      this.products.splice(index, 1);
      this.message = 'Продукт удален';
      this.showMessage();
    });
  }

  showMessage() {
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }
}
