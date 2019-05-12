import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prestador } from './prestadores.model';


@Component({
  selector: 'app-prestadores',
  templateUrl: './prestadores.component.html',
  styleUrls: ['./prestadores.component.scss']
})
export class PrestadoresComponent implements OnInit {

  @Input() prestador: Prestador;
  @Output() selecionarPrestador = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('prestador : ' +this.prestador);
  }

  public emitAddEvent(): void {
    this.selecionarPrestador.emit(this.prestador);
  }

}
