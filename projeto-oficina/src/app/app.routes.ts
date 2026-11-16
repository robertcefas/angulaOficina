import { Routes } from '@angular/router';
import { Carro } from './pages/carro/carro';
import { Contatos } from './pages/contatos/contatos';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'carro', component: Carro },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'carro', component: Carro },
  { path: 'contatos', component: Contatos },
  
];
