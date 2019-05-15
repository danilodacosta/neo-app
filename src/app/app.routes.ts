import { EmpreendimentoDetalheComponent } from './empreendimento-detalhe/empreendimento-detalhe.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';
import { Routes } from '@angular/router';

import { EmpreendimentosComponent } from './empreendimentos/empreendimentos.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'empreendimentos' , component: EmpreendimentosComponent },
  { path: 'empreendimentos/:id', component: EmpreendimentoDetalheComponent},
  { path: 'meus-agendamentos' , component: MeusAgendamentosComponent },
  { path: 'agendamento' , component: AgendamentoComponent },

];
