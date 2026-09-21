import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PortafolioAComponent } from './portafolio-a/portafolio-a.component';

const routes: Routes = [
  { path: '', component: MenuPrincipalComponent },
  { path: 'PortafolioA', component: PortafolioAComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
