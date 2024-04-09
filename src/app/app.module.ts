import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PortafolioAComponent } from './portafolio-a/portafolio-a.component';
import { PortafolioLComponent } from './portafolio-l/portafolio-l.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    PortafolioAComponent,
    PortafolioLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
