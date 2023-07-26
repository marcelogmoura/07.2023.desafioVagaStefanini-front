import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraConsultaComponent } from './obra-consulta.component';

describe('ObraConsultaComponent', () => {
  let component: ObraConsultaComponent;
  let fixture: ComponentFixture<ObraConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObraConsultaComponent]
    });
    fixture = TestBed.createComponent(ObraConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
