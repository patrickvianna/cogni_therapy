import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feel',
  templateUrl: './feel.page.html',
  styleUrls: ['./feel.page.scss'],
})
export class FeelPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  selected(container: any) {
    this.nav.navigateRoot("feeling");
    console.log(container)
  }

}
