import { HorariosService } from "./../horarios-disponiveis/horarios.service";
import { EmpreendimentoService } from "./../empreendimentos/empreendimentos.service";
import { AgendamentoService } from "./agendamento.service";
import { Agendamento } from "./agendamento.model";
import { DateFormatPipe } from "./../shared/DateFormatPipe.pipe";
import { Convenio } from "./../convenio/convenio.model";
import { Prestador } from "./../prestadores/prestadores.model";
import { Empreendimento } from "./../empreendimentos/empreendimento/empreendimento.model";
import { Component, OnInit, OnChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PrestadorService } from "../prestadores/prestadores.service";
import { timeInterval, map } from "rxjs/operators";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-agendamento",
  templateUrl: "./agendamento.component.html",
  styleUrls: ["./agendamento.component.scss"],
  providers: [PrestadorService, DateFormatPipe]
})
export class AgendamentoComponent implements OnInit {
  public empreendimento: Empreendimento;
  public especialidades: Array<any>;
  public prestador: Prestador;
  public especialidadeSelecionada: string;
  public convenio: Convenio;
  public jsonConsultaHorarios: any = new Object();
  public agendamento: Agendamento;

  constructor(
    private route: ActivatedRoute,
    private agendamentoService: AgendamentoService,
    private empreendimentoService: EmpreendimentoService,
    private horariosService: HorariosService
  ) {}

  ngOnInit() {
    this.agendamento = this.agendamentoService.getAgendamento();
    this.consultarEmpreendimento();
    this.prestador = this.agendamentoService.getPrestador();
    this.convenio = this.agendamentoService.getConvenio();
    this.consultaHorariosDisponiveis();
  }

  private consultarEmpreendimento(): void {
    this.empreendimentoService
      .empreendimentoById(Number(this.agendamento.Empreendimento))
      .subscribe(e => {
        this.empreendimento = e[0];
      });
  }

  public consultaHorariosDisponiveis(): void {
    this.horariosService
      .horariosDisponiveis(this.agendamento)
      .subscribe(horarios => {
        console.log('horarios : ' + horarios);
      });
  }
}
