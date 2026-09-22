import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PresentacionComponent } from './presentacion.component';

describe('PresentacionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PresentacionComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PresentacionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the name and experience', () => {
    const fixture = TestBed.createComponent(PresentacionComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Alexander');
    expect(compiled.textContent).toContain('7 años de experiencia');
  });
});
