import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlProducts = 'http://localhost:8080/products';

  constructor(private httpProduct: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpProduct.get<Product[]>(this.urlProducts).pipe(
      map(res => res)
    );
  }
}
