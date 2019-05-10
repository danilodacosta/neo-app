import { Convenio } from './../convenio/convenio.model';
import { Prestador } from './../prestadores/prestadores.model';
import { Empreendimento } from './../empreendimentos/empreendimento/empreendimento.model';
import { EmpreendimentoService } from './../empreendimentos/empreendimentos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrestadorService } from '../prestadores/prestadores.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss'],
  providers: [EmpreendimentoService, PrestadorService]
})
export class AgendamentoComponent implements OnInit {
  public empreendimento: Empreendimento;
  public especialidades: Array<any>;
  public prestadores: Array<Prestador>;
  public especialidadeSelecionada: string;
  public convenio: Convenio;

  constructor(
    private empreendimentoService: EmpreendimentoService,
    private route: ActivatedRoute,
    private prestadorService: PrestadorService
  ) {}

  ngOnInit() {
    this.consultarEmpreendimento();
    this.consultarEspecialidades();
  }

  private consultarEmpreendimento(): void {
    this.empreendimentoService
      .empreendimentoById(this.route.snapshot.params['id'])
      .subscribe(empreendimento => {
        this.empreendimento = empreendimento[0];
      });
  }

  private consultarEspecialidades(): void {
    this.empreendimentoService
      .especialidadeByEmpreendimento(this.route.snapshot.params['id'])
      .subscribe(especialidades => {
        this.especialidades = especialidades;
        this.especialidadeSelecionada = this.especialidades[0];
      });
  }

  private consultarPrestadores(): void {
    const empreendimentoId = this.route.snapshot.params['id'];
    this.prestadorService.prestadores(empreendimentoId, this.convenio.id)
    .subscribe(prestadores => {
      this.prestadores = prestadores;
    });

}

public prestadorSelecionado(prestador: Prestador): void {
  console.log('prestador Selecionado : ' + prestador);
}

public selecionarConvenio(convenio: Convenio): void {
  console.log('convenio Selecionado : ' + convenio);
}

}
