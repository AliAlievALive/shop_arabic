import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-client-options',
  templateUrl: './client-options.component.html',
  styleUrls: ['./client-options.component.css']
})
export class ClientOptionsComponent implements OnInit {

  clientGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clientGroup= this.formBuilder.group({
      client: this.formBuilder.group({
        name: ['Имя'],
        age: ['Возраст'],
        address: ['Адрес'],
        phone: ['Телефонный номер'],
        gender: ['Пол'],
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
    console.log(this.getName());
    console.log(this.getAge());
    console.log(this.getAddress());
    console.log(this.getPhone());
    console.log(this.getGender());
  }
}
