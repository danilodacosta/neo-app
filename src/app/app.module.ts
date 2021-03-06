import { EmpreendimentoService } from './empreendimentos/empreendimentos.service';
import { DateFormatPipe } from './shared/DateFormatPipe.pipe';
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
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';


import { EmpreendimentosComponent } from './empreendimentos/empreendimentos.component';
import { EmpreendimentoComponent } from './empreendimentos/empreendimento/empreendimento.component';
import { HomeComponent } from './home/home.component';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';
import { PrestadoresComponent } from './prestadores/prestadores.component';
import { PrestadorComponent } from './prestadores/prestador/prestador.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ConvenioComponent } from './convenio/convenio.component';
import { HorariosDisponiveisComponent } from './horarios-disponiveis/horarios-disponiveis.component';
import { AgendamentoService } from './agendamento/agendamento.service';
import { HorariosService } from './horarios-disponiveis/horarios.service';
import { EmpreendimentoDetalheComponent } from './empreendimento-detalhe/empreendimento-detalhe.component';
import { PrestadorService } from './prestadores/prestadores.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpreendimentosComponent,
    EmpreendimentoComponent,
    HomeComponent,
    MeusAgendamentosComponent,
    PrestadoresComponent,
    PrestadorComponent,
    AgendamentoComponent,
    ConvenioComponent,
    DateFormatPipe,
    HorariosDisponiveisComponent,
    EmpreendimentoDetalheComponent

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
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSelectModule,
    MatChipsModule

  ],
  providers: [AgendamentoService, HorariosService , EmpreendimentoService, PrestadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
