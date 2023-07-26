import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraEdicaoComponent } from './obra-edicao.component';

describe('ObraEdicaoComponent', () => {
  let component: ObraEdicaoComponent;
  let fixture: ComponentFixture<ObraEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObraEdicaoComponent]
    });
    fixture = TestBed.createComponent(ObraEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
