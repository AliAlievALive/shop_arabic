import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/client';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.getClients()
  }

  getClients() {
    this.clientService.getClients().subscribe(
      data => {
        this.clients = data;
      }
    );
  }
}
