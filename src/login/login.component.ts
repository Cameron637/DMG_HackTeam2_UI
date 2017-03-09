import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '.login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  login = {};
  @Output() onLogin = new EventEmitter<Object>();

  submit() {
    this.onLogin.emit(this.login);
  }
}