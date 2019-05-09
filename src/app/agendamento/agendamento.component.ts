import { Empreendimento } from "./../empreendimentos/empreendimento/empreendimento.model";
import { EmpreendimentoService } from "./../empreendimentos/empreendimentos.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-agendamento",
  templateUrl: "./agendamento.component.html",
  styleUrls: ["./agendamento.component.scss"],
  providers: [EmpreendimentoService]
})
export class AgendamentoComponent implements OnInit {
  public empreendimento: Empreendimento;
  public especialidades: Array<any>;
  public especialidadeSelecionada: string;

  constructor(
    private empreendimentoService: EmpreendimentoService,
    private route: ActivatedRoute
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
}
