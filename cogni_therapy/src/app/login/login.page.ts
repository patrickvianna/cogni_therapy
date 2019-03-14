import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login : String;
  public senha : String;

  constructor() { }

  ngOnInit() {
  }

  logar() {
    console.log('login')
  }
  
  registrar(){
    console.log('registrar')
  }
}
