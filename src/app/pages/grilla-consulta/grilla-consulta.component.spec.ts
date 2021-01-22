import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaConsultaComponent } from './grilla-consulta.component';

describe('GrillaConsultaComponent', () => {
  let component: GrillaConsultaComponent;
  let fixture: ComponentFixture<GrillaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
