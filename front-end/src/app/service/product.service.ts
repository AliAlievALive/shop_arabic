import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {map} from 'rxjs/operators';
import {Client} from '../model/client';

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

  deleteProduct(id: number) {
    return this.httpProduct.delete(this.urlProducts + `?id=${id}`);
  }

  addProduct(product: Product) {
    return this.httpProduct.post(this.urlProducts, product);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpProduct.get<Product>(this.urlProducts + `/${id}`).pipe(
      map(res => res)
    )
  }

  editProduct(product: Product) {
    return this.httpProduct.put(this.urlProducts + `?id=${product.id}`, product);
  }
}
