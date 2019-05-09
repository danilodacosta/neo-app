import { retry, catchError, map } from 'rxjs/operators';
import { Empreendimento } from './empreendimento/empreendimento.model';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from './../app.error-handler';
import { AGE_API } from '../app.api';


@Injectable()
export class EmpreendimentoService {
  constructor(private http: HttpClient) {}

  public empreendimentos()  {

    return this.http.get<Empreendimento[]>(`${AGE_API}/Empreendimentos/Consultar`)
    .pipe (
      map(resposta => JSON.parse(resposta.toString()).classe.empreendimentos),
      retry(3),
      catchError(ErrorHandler.handleError)
    );
  }
}
