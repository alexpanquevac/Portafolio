import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioAComponent } from './portafolio-a.component';

describe('PortafolioAComponent', () => {
  let component: PortafolioAComponent;
  let fixture: ComponentFixture<PortafolioAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
