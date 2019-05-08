import { Routes } from '@angular/router';

import { EmpreendimentosComponent } from './empreendimentos/empreendimentos.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'empreendimentos' , component: EmpreendimentosComponent }
];
