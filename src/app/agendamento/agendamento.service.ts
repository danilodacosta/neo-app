import { Convenio } from './../convenio/convenio.model';
import { PrestadorService } from './../prestadores/prestadores.service';
import { Empreendimento } from './../empreendimentos/empreendimento/empreendimento.model';
import { EmpreendimentoService } from './../empreendimentos/empreendimentos.service';
import { Agendamento } from './agendamento.model';
import { HorariosService } from './../horarios-disponiveis/horarios.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestador } from '../prestadores/prestadores.model';

@Injectable()
export class AgendamentoService {

private agendamento: Agendamento;
private prestador: Prestador;
private convenio: Convenio;

constructor(private horariosService: HorariosService,
            private empreendimentoService: EmpreendimentoService,
            private prestadorServce: PrestadorService ) {
}

getHorariosDisponiveis(agendamento: Agendamento) {
  //this.horariosService.horariosDisponiveis(agendamento);
}

setAgendamento(agendamento: Agendamento , prestador: Prestador, convenio: Convenio) {
  this.agendamento = new Agendamento(
    agendamento.DataFinal, agendamento.DataInicial,
    agendamento.Empreendimento, '' , '', agendamento.Prestador, '0', '0');
     this.prestador = prestador;
     this.convenio = convenio;
}

getAgendamento(): Agendamento {
  return this.agendamento;
}

getPrestador(): Prestador {
  return this.prestador;
}

getConvenio(): Convenio {
  return this.convenio;
}


}
