import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudocaNaoEncontradoComponent } from './judoca-nao-encontrado.component';

describe('JudocaNaoEncontradoComponent', () => {
  let component: JudocaNaoEncontradoComponent;
  let fixture: ComponentFixture<JudocaNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudocaNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudocaNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
