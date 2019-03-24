import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feeling-detail',
  templateUrl: './feeling-detail.page.html',
  styleUrls: ['./feeling-detail.page.scss'],
})
export class FeelingDetailEditarPage implements OnInit {

  public situacaoChecked = false;
  public situacao: String;
  public problemasChecked = false;
  public problemas: String;
  public acaoChecked = false;
  public acao: String;

  id: Number;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    console.log('sub: ', this.sub);
    console.log('id: ', this.id);
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
