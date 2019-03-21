import { Component, OnInit } from '@angular/core';
import { HistoryFeeling } from './history-feeling';
import { FeelingDetail } from '../feeling-detail/feeling-detail';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss']
})
export class HistoryPage implements OnInit {

  public history = new HistoryFeeling();
  itemExpandHeight: number = 100;
  teste = "TESTEE";


  constructor() {
    for (var i = 0; i < 5; i++) {
      let feeling = new FeelingDetail()
      feeling.action = `action ${i}`
      feeling.date = new Date();
      feeling.situation = `situation ${i}`;
      feeling.thought = `thought ${i}`;
      
      this.history.feelings.push(feeling);
    }
  }

  ngOnInit() {
  }

  expandItem(item) {
    this.history.feelings.map(x => {
      if (item == x)
        x.expanded = !x.expanded;
      else
        x.expanded = false;

      return x;
    });

  }
}
