import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginFormGroup: FormGroup;
  invalidMessage: string;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private route: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        username: [''],
        password: ['']
      })
    });
  }

  OnSubmit() {
    const result = this.loginService.login(this.loginFormGroup.get('admin').value.username, this.loginFormGroup.get('admin').value.password);

    if (result == true) {
      this.route.navigateByUrl('products');
    } else {
      this.invalidMessage = 'Invalid username and/or password';
      this.showMessage();
    }
  }

  showMessage() {
    setTimeout(() => {
      this.invalidMessage = '';
    }, 3000);
  }
}
