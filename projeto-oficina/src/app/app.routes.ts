import { Routes } from '@angular/router';
import { Veiculos } from './pages/veiculos/veiculos';
import { Contatos } from './pages/contatos/contatos';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'veiculos', component: Veiculos },
  { path: 'contatos', component: Contatos },
  { path: 'sobre', component: Sobre },
  // Rotas do seu amigo:
  // { path: 'home', component: Home },
  // { path: 'servicos', component: Servicos },
];