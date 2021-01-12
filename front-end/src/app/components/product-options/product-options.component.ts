import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ClientService} from '../../service/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.css']
})
export class ProductOptionsComponent implements OnInit {

  productGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private serviceProd: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.productGroup = this.formBuilder.group({
      product: this.formBuilder.group({
        name: ['Наименование'],
        price: ['Цена'],
        stock: ['Доступны к покупке'],
        // dateCreated: [''],
      })
    })
  }

  getName() {
    return this.productGroup.get('product').value.name;
  }

  getPrice() {
    return this.productGroup.get('product').value.price;
  }

  getStock() {
    return this.productGroup.get('product').value.stock;
  }

  add() {
    const prod = new Product(
      this.getName(),
      this.getPrice(),
      this.getStock()
    );

    this.serviceProd.addProduct(prod).subscribe(() => {
      this.router.navigateByUrl('/clients');
    });
  }
}
