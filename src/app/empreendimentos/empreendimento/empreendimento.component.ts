import { Empreendimento } from './empreendimento.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empreendimento',
  templateUrl: './empreendimento.component.html',
  styleUrls: ['./empreendimento.component.scss']
})
export class EmpreendimentoComponent implements OnInit {

  @Input() public empreendimento: Empreendimento;
  public razaoSocial: string;

  constructor() { }

  ngOnInit() {
    this.razaoSocial = this.empreendimento.razaoSocial;
  }
}
