import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioLComponent } from './portafolio-l.component';

describe('PortafolioLComponent', () => {
  let component: PortafolioLComponent;
  let fixture: ComponentFixture<PortafolioLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
