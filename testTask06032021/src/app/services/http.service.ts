import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>('http://localhost:8080/products').pipe(items => {
      return items;
    });
  }

  public save(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:8080/products', product).pipe(res => {
      return res;
    });
  }

  public edit(product: Product): void {
    this.http.put('http://localhost:8080/products', product);
  }

  delete(id: string): void {
    this.http.delete(`http://localhost:8080/products/${id}`).subscribe();
  }
}
