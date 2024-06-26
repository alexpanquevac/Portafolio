import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  consultarPortafolio(portafolio: String) {
    if ("PortafolioA" == portafolio) {
      this.router.navigate(['PortafolioA']);
    }
    if ("PortafolioL" == portafolio) {
      this.router.navigate(['PortafolioL']);
    }
  }

}
