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

  deleteClient(id: number) {
    return this.httpClient.delete(this.urlClients + `?id=${id}`);
  }

  addClient(client: Client) {
    return this.httpClient.post(this.urlClients, client)
  }

  getClient(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`http://localhost:8080/system/client?id=${id}`).pipe(
      map(res => res)
    );
  }

  editClient(client: Client) {
    return this.httpClient.put(this.urlClients + `?id=${client.id}`, client);
  }
}
