import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeling-detail',
  templateUrl: './feeling-detail.page.html',
  styleUrls: ['./feeling-detail.page.scss'],
})
export class FeelingDetailPage implements OnInit {

  public situacaoChecked = false;
  public situacao = "";
  public problemasChecked = false;
  public problemas = "";
  public acaoChecked = false;
  public acao = "";

  constructor() { }

  ngOnInit() {
  }

  situacaoBlur() {
    console.log(this.situacao);
    if (this.situacao.trim() != "" && this.situacao != undefined)
      this.situacaoChecked = true;
    else
      this.situacaoChecked = false;
  }

  problemasBlur() {
    if (this.problemas.trim() != "" && this.problemas != undefined)
      this.problemasChecked = true;
    else
      this.problemasChecked = false;
  }

  acaoBlur() {
    if (this.acao.trim() != "" && this.acao != undefined)
      this.acaoChecked = true;
    else
      this.acaoChecked = false;
  }

}
