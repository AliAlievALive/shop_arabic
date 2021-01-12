import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/client';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlClients = 'http://localhost:8080/system/clients';

  constructor(private httpClient: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.urlClients).pipe(
      map(res => res)
    );
  }

  deleteClients(id: number) {
    return this.httpClient.delete(this.urlClients + `?id=${id}`);
  }
}
