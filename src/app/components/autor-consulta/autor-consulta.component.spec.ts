import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorConsultaComponent } from './autor-consulta.component';

describe('AutorConsultaComponent', () => {
  let component: AutorConsultaComponent;
  let fixture: ComponentFixture<AutorConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutorConsultaComponent]
    });
    fixture = TestBed.createComponent(AutorConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
