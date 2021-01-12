import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Client} from '../../model/client';
import {ClientService} from '../../service/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-options',
  templateUrl: './client-options.component.html',
  styleUrls: ['./client-options.component.css']
})
export class ClientOptionsComponent implements OnInit {

  clientGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private serviceClient: ClientService,
              private router: Router) { }

  ngOnInit(): void {
    this.clientGroup= this.formBuilder.group({
      client: this.formBuilder.group({
        name: [''],
        age: [''],
        address: [''],
        phone: [''],
        gender: [''],
        // dateCreated: [''],
        // dateLastVisit: [''],
      })
    })
  }

  getName() {
    return this.clientGroup.get('client').value.name;
  }

  getAge() {
    return this.clientGroup.get('client').value.age;
  }

  getAddress() {
    return this.clientGroup.get('client').value.address;
  }

  getPhone() {
    return this.clientGroup.get('client').value.phone;
  }

  getGender() {
    return this.clientGroup.get('client').value.gender;
  }

  add() {
    const client = new Client(
      this.getName(),
      this.getGender(),
      this.getAge(),
      this.getAddress(),
      this.getPhone()
    );

    this.serviceClient.addClient(client).subscribe(() => {
      this.router.navigateByUrl('/clients');
    });
  }
}
