import { Routes } from '@angular/router';
import { Carro } from './pages/carro/carro';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'carro', component: Carro },
  // Quando forem criando as outras páginas, basta descomentar e importar:
  // { path: 'home', component: Home },
  // { path: 'sobre', component: Sobre },
  // { path: 'moto', component: Moto },
  // { path: 'servicos', component: Servicos },
  // { path: 'contatos', component: Contatos },
];