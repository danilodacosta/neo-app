import { Component, OnInit, Input } from '@angular/core';
import { Prestador } from '../prestadores.model';

@Component({
  selector: 'app-prestador',
  templateUrl: './prestador.component.html',
  styleUrls: ['./prestador.component.scss']
})
export class PrestadorComponent implements OnInit {

  @Input() prestador: Prestador;

  constructor() { }

  ngOnInit() {
  }

}
