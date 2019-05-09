import { ConvenioService } from './convenio.service';
import { Convenio } from './convenio.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.scss'],
  providers: [ConvenioService]
})
export class ConvenioComponent implements OnInit {

  constructor(private convenioService: ConvenioService) { }

  convenioSelecionado: Convenio;
  public convenios: Array<Convenio>;

  ngOnInit() {
    this.convenioService.convenios()
    .subscribe(convenios => {
      this.convenios = convenios;
      this.convenioSelecionado = this.convenios[0];

    });
  }

}
