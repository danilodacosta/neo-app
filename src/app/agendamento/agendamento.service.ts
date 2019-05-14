import { EmpreendimentoService } from './../empreendimentos/empreendimentos.service';
import { Agendamento } from './agendamento.model';
import { HorariosService } from './../horarios-disponiveis/horarios.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AgendamentoService {

private agendamento: Agendamento;

constructor(private horariosService: HorariosService) {

}

getHorariosDisponiveis(agendamento: Agendamento) {
  //this.horariosService.horariosDisponiveis(agendamento);
}

getEmpreendimento() {

}

getPrestador() {

}

setAgendamento(agendamento: Agendamento) {
  this.agendamento = new Agendamento(
    agendamento.DataFinal, agendamento.DataInicial,
    agendamento.Empreendimento, '' , '', agendamento.Prestador, '0', '0');
}

getAgendamento(): Agendamento {
  return this.agendamento;
}

}
