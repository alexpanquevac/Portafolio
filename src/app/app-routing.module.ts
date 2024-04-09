import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PortafolioAComponent } from './portafolio-a/portafolio-a.component';
import { PortafolioLComponent } from './portafolio-l/portafolio-l.component';

const routes: Routes = [
  { path: '', component: MenuPrincipalComponent },
  { path: 'PortafolioA', component: PortafolioAComponent },
  { path: 'PortafolioL', component: PortafolioLComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
