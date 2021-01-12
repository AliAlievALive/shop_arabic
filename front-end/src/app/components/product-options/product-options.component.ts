import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.css']
})
export class ProductOptionsComponent implements OnInit {

  productGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

  add() {

  }
}
