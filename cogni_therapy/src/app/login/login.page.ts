import { FeelPage } from './../feel/feel.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login : String;
  public senha : String;

  constructor(private nav: NavController, private rot: Router) { }

  ngOnInit() {
  }

  logar() {
    this.nav.navigateRoot("feel");
    // this.rot.navigate();
  }
  
  registrar(){
    console.log('registrar')
  }
}
