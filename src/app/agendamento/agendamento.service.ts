import { Convenio } from './../convenio/convenio.model';
import { Agendamento } from './agendamento.model';
import { Injectable } from '@angular/core';
import { Prestador } from '../prestadores/prestadores.model';

@Injectable()
export class AgendamentoService {

private agendamento: Agendamento;
private prestador: Prestador;
private convenio: Convenio;

constructor() {
}

setAgendamento(agendamento: Agendamento , prestador: Prestador, convenio: Convenio) {
    this.agendamento = new Agendamento(
    agendamento.Empreendimento, agendamento.Prestador,
    agendamento.DataInicial,
    agendamento.DataFinal,
    '1', ' ', '0', ' ', ' ');

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
