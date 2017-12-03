import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeticaoDetalheComponent } from './competicao-detalhe.component';

describe('CompeticaoDetalheComponent', () => {
  let component: CompeticaoDetalheComponent;
  let fixture: ComponentFixture<CompeticaoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompeticaoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompeticaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
