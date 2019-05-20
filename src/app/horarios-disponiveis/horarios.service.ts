import { Agendamento } from './../agendamento/agendamento.model';
import { retry, catchError, map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from './../app.error-handler';
import { AGE_API } from '../app.api';


@Injectable()
export class HorariosService {

  constructor(private http: HttpClient) {}

  public horariosDisponiveis(agendamento: Agendamento)  {
    console.log(`${AGE_API}/HorarioDisponivel/Consultar?Json=${JSON.stringify(agendamento)}`);
    return this.http.get<any[]>(`${AGE_API}/HorarioDisponivel/Consultar?Json=${JSON.stringify(agendamento)}`)
    .pipe (
      map(resposta => {
        // JSON.parse(resposta.toString()).Classe.HorariosDisponiveis
        console.log(resposta.Classe.HorariosDisponiveis);

      }),
      retry(3),
      catchError(ErrorHandler.handleError)
    );
  }
}
