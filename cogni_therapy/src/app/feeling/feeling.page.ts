import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feeling',
  templateUrl: './feeling.page.html',
  styleUrls: ['./feeling.page.scss'],
})
export class FeelingPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  next() {
    this.nav.navigateRoot("feeling-detail");
  }
}
