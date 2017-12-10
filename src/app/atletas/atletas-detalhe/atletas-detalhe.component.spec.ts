import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletasDetalheComponent } from './atletas-detalhe.component';

describe('AtletasDetalheComponent', () => {
  let component: AtletasDetalheComponent;
  let fixture: ComponentFixture<AtletasDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtletasDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
