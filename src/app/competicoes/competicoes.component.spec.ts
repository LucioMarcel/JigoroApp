import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeticoesComponent } from './competicoes.component';

describe('CompeticoesComponent', () => {
  let component: CompeticoesComponent;
  let fixture: ComponentFixture<CompeticoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompeticoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompeticoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
