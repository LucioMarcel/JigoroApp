import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudocaDetalheComponent } from './judoca-detalhe.component';

describe('JudocaDetalheComponent', () => {
  let component: JudocaDetalheComponent;
  let fixture: ComponentFixture<JudocaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudocaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudocaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
