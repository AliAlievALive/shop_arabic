import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Array<Product> {
    const result: Array<Product> = [];
    this.http.get<Array<Product>>('http://localhost:8080/products').subscribe(items => {
      items.forEach(product => {
        result.push(product);
      });
    });
    return result;
  }

  public save(product: Product): Product {
    if (product.id) {
      return this.edit(product);
    } else {
      const body = {name: product.name};
      this.http.post<Product>('http://localhost:8080/products', body).subscribe(res => {
        return res;
      });
    }
    return ;
  }

  private edit(product: Product): Product {
    const body = {name: product.name};
    this.http.put(`http://localhost:8080/products/${product.id}`, body).subscribe(res => {
      console.log(res);
      return res;
    });
    return ;
  }

  delete(id: string): void {
    this.http.delete(`http://localhost:8080/products/${id}`).subscribe();
  }
}
