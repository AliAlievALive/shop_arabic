import {Component, OnInit} from '@angular/core';
import {Client} from '../../model/client';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  message: string;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(
        data => {
          this.clients = data;
        }
    );
  }

  deleteClient(id: number) {
    this.clientService.deleteClients(id).subscribe(() => {
      this.getClients();
      this.message = `Клиент успешно удален`;
    });
  }
}
