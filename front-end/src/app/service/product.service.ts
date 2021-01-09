import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlProducts = 'http://localhost:8080/api/products';

  constructor(private httpProduct: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpProduct.get<GetResponseProduct>(this.urlProducts).pipe(
      map(res => res._embedded.products)
    );
  }
}

interface GetResponseProduct {
  _embedded: {
    products: Product[]
  };
}
