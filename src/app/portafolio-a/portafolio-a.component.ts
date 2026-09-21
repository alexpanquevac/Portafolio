import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-portafolio-a',
    templateUrl: './portafolio-a.component.html',
    styleUrls: ['./portafolio-a.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PortafolioAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
