import { Agendamento } from './../agendamento/agendamento.model';
import { Query } from './../querys';
import { retry, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from './../app.error-handler';
import { AGE_API } from '../app.api';


@Injectable()
export class HorariosService {

  constructor(private http: HttpClient) {}

  public horariosDisponiveis(agendamento: Agendamento)  {
    return this.http.get<any[]>(`${AGE_API}/HorarioDisponivel/Consultar?Json=${JSON.stringify(agendamento)}`)
    .pipe (
      map(resposta => JSON.parse(resposta.toString()).classe.HorariosDisponiveis),
      retry(3),
      catchError(ErrorHandler.handleError)
    );
  }
}
