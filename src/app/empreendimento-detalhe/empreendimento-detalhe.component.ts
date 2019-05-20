import { AgendamentoService } from './../agendamento/agendamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamento } from './../agendamento/agendamento.model';
import { Convenio } from './../convenio/convenio.model';
import { Component, OnInit } from '@angular/core';

import { Empreendimento } from './../empreendimentos/empreendimento/empreendimento.model';
import { EmpreendimentoService } from './../empreendimentos/empreendimentos.service';
import { PrestadorService } from '../prestadores/prestadores.service';
import { DateFormatPipe } from './../shared/DateFormatPipe.pipe';
import { Prestador } from '../prestadores/prestadores.model';

@Component({
  selector: 'app-empreendimento-detalhe',
  templateUrl: './empreendimento-detalhe.component.html',
  styleUrls: ['./empreendimento-detalhe.component.scss'],
  providers: [DateFormatPipe]
})
export class EmpreendimentoDetalheComponent implements OnInit {

  public empreendimento: Empreendimento;
  public especialidades: Array<any>;
  public prestadores: Array<Prestador>;
  public especialidadeSelecionada: string;
  public convenio: Convenio;
  public jsonConsultaHorarios: any = new Object;
  public agendamento: Agendamento;
  public convenioSelecionado: Convenio;

  public consultandoPrestador = false;

  constructor(
    private empreendimentoService: EmpreendimentoService,
    private route: ActivatedRoute,
    private prestadorService: PrestadorService,
    private dateFomartPipe: DateFormatPipe,
    private agendamentoService: AgendamentoService,
    private router: Router
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

  private consultarPrestadores(convenio: Convenio): void {
    this.convenioSelecionado = convenio;
    this.consultandoPrestador = true;
    const empreendimentoId = this.route.snapshot.params['id'];
    this.prestadorService.prestadores(empreendimentoId, convenio.id)
    .subscribe(prestadores => {
      this.prestadores = prestadores;
      this.consultandoPrestador = false;
    });
}

public selecionarConvenio(convenio: Convenio): void {
  this.consultarPrestadores(convenio);

}

public prestadorSelecionado(prestador: Prestador): void {

  //  this.jsonConsultaHorarios = new Object;
  this.agendamento = new Agendamento(
  this.route.snapshot.params['id'],prestador.id.toString(),
  this.dateFomartPipe.transform(new Date()),
  this.dateFomartPipe.transform(this.calcularProximosDias()),
  '1', ' ', '0', ' ', ' ');

  this.agendamentoService.setAgendamento(this.agendamento, prestador, this.convenioSelecionado);
  this.router.navigate(['/agendamento']);
}

private calcularProximosDias(): Date {
  const data = new Date();
  const novaData = new Date();
  novaData.setDate(data.getDate() + 30);
  return novaData;
}




}
