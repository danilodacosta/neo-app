import { AgendamentoService } from './agendamento.service';
import { Agendamento } from './agendamento.model';
import { DateFormatPipe } from './../shared/DateFormatPipe.pipe';
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
  providers: [EmpreendimentoService, PrestadorService, DateFormatPipe]
})
export class AgendamentoComponent implements OnInit {
  public empreendimento: Empreendimento;
  public especialidades: Array<any>;
  public prestadores: Array<Prestador>;
  public especialidadeSelecionada: string;
  public convenio: Convenio;
  public jsonConsultaHorarios: any = new Object;
  public agendamento: Agendamento;

  constructor(
    private empreendimentoService: EmpreendimentoService,
    private route: ActivatedRoute,
    private prestadorService: PrestadorService,
    private dateFomartPipe: DateFormatPipe,
    private agendamentoService: AgendamentoService
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
    const empreendimentoId = this.route.snapshot.params['id'];
    this.prestadorService.prestadores(empreendimentoId, convenio.id)
    .subscribe(prestadores => {
      this.prestadores = prestadores;

    });
}

public selecionarConvenio(convenio: Convenio): void {
  this.consultarPrestadores(convenio);
}

public prestadorSelecionado(prestador: Prestador): void {

  //  this.jsonConsultaHorarios = new Object;
  this.agendamento = new Agendamento(
  this.dateFomartPipe.transform(new Date()),
  this.dateFomartPipe.transform(this.calcularProximosDias()),
  this.route.snapshot.params['id'], '' , '', prestador.id.toString(), '0', '0');

  //this.agendamentoService.setAgendamento(this.agendamento);

  //console.log( this.agendamentoService.getAgendamento);


}

private calcularProximosDias(): Date {
  const data = new Date();
  const novaData = new Date();
  novaData.setDate(data.getDate() + 30);
  return novaData;
}



}
