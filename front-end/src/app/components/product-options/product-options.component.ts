import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.css']
})
export class ProductOptionsComponent implements OnInit {

  productGroup: FormGroup;
  id: number;
  myProduct: Product = new Product('', undefined, undefined);

  constructor(private formBuilder: FormBuilder,
              private serviceProd: ProductService,
              private router: Router,
              private root: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.root.snapshot.paramMap.get('id');
    if (this.id) {
      this.serviceProd.getProduct(this.id).subscribe(res =>
        this.myProduct = res);
    }
    this.productGroup = this.formBuilder.group({
      product: this.formBuilder.group({
        name: [''],
        price: [''],
        stock: [''],
        // dateCreated: [''],
      })
    });
  }

  getName() {
    return this.productGroup.get("product").value.name;
  }

  getPrice() {
    return this.productGroup.get("product").value.price;
  }

  getStock() {
    return this.productGroup.get("product").value.stock;
  }

  add() {
    const prod = new Product(
      this.getName(),
      this.getPrice(),
      this.getStock()
    );
    if (!this.id) {
      this.serviceProd.addProduct(prod).subscribe(() => {
        this.router.navigateByUrl('/products');
      });
    } else {
      for (const key of Object.keys(prod)) {
        if (prod[key] == '') {
          prod[key] = this.myProduct[key];
        }
      }
      prod.id = this.myProduct.id;
      prod.dateCreated = new Date();
      this.serviceProd.editProduct(prod).subscribe(() => {
        this.router.navigateByUrl('/products');
      });
    }
  }
}
