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

  constructor(
    private empreendimentoService: EmpreendimentoService,
    private route: ActivatedRoute,
    private prestadorService: PrestadorService,
    private dateFomartPipe: DateFormatPipe
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

public prestadorSelecionado(prestador: Prestador): void {
    this.jsonConsultaHorarios = new Object;
    this.jsonConsultaHorarios.Prestador = prestador.id.toString();
    this.jsonConsultaHorarios.Empreendimento = this.route.snapshot.params['id'];
    this.jsonConsultaHorarios.DataInicial = this.dateFomartPipe.transform(new Date());
    this.jsonConsultaHorarios.DataFinal = this.dateFomartPipe.transform(this.calcularProximosDias());
    this.jsonConsultaHorarios.TipoAgenda = '0';
    this.jsonConsultaHorarios.QuantReg = '0';
    this.jsonConsultaHorarios.Hora = '';
    this.jsonConsultaHorarios.HoraPeriodo = '';

    console.log(this.jsonConsultaHorarios);
}

private calcularProximosDias(): Date {
  const data = new Date();
  const novaData = new Date();
  novaData.setDate(data.getDate() + 30);
  return novaData;
}

public selecionarConvenio(convenio: Convenio): void {
  this.consultarPrestadores(convenio);
}

}
