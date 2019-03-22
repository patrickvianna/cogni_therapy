import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feel',
  templateUrl: './feel.page.html',
  styleUrls: ['./feel.page.scss'],
})
export class FeelPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selected(container: any){
    // console.log('container')
    console.log(container)
  }

}
