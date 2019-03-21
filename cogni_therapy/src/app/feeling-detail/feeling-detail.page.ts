import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeling-detail',
  templateUrl: './feeling-detail.page.html',
  styleUrls: ['./feeling-detail.page.scss'],
})
export class FeelingDetailPage implements OnInit {

  public situacaoChecked = false;
  public situacao : String;
  public problemasChecked = false;
  public problemas : String;
  public acaoChecked = false;
  public acao : String;

  constructor() { }

  ngOnInit() {
  }

  situacaoBlur() {
    console.log(this.situacao);
    if (this.situacao != undefined && this.situacao.trim() != "")
      this.situacaoChecked = true;
    else
      this.situacaoChecked = false;
  }

  problemasBlur() {
    if (this.problemas != undefined && this.problemas.trim() != "")
      this.problemasChecked = true;
    else
      this.problemasChecked = false;
  }

  acaoBlur() {
    if (this.acao != undefined && this.acao.trim() != "")
      this.acaoChecked = true;
    else
      this.acaoChecked = false;
  }

}
