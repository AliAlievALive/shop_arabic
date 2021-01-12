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
        userName: ['Имя'],
        age: ['Возраст'],
        address: ['Адрес'],
        phone: ['Телефонный номер'],
        gender: ['Пол'],
        // dateCreated: [''],
        // dateLastVisit: [''],
      })
    })
  }

  add() {

  }
}
