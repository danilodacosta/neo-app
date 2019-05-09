import { EmpreendimentoService } from './empreendimentos.service';
import { Empreendimento } from './empreendimento/empreendimento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empreendimentos',
  templateUrl: './empreendimentos.component.html',
  styleUrls: ['./empreendimentos.component.scss'],
  providers: [EmpreendimentoService]
})
export class EmpreendimentosComponent implements OnInit {

  empreendimentos: Empreendimento[];

  constructor(private empreendimentoService: EmpreendimentoService) { }

  ngOnInit() {
    this.empreendimentoService.empreendimentos()
    .subscribe((empreendimentos =>  {
      this.empreendimentos = empreendimentos;
      console.log(empreendimentos);
    }));
  }
}
