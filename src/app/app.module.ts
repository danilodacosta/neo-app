import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { EmpreendimentosComponent } from './empreendimentos/empreendimentos.component';
import { EmpreendimentoComponent } from './empreendimentos/empreendimento/empreendimento.component';
import { HomeComponent } from './home/home.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';
import { PrestadoresComponent } from './prestadores/prestadores.component';
import { PrestadorComponent } from './prestadores/prestador/prestador.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpreendimentosComponent,
    EmpreendimentoComponent,
    HomeComponent,
    AgendamentosComponent,
    MeusAgendamentosComponent,
    PrestadoresComponent,
    PrestadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,

    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
