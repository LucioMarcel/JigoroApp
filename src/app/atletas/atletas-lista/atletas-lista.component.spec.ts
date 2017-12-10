import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletasListaComponent } from './atletas-lista.component';

describe('AtletasListaComponent', () => {
  let component: AtletasListaComponent;
  let fixture: ComponentFixture<AtletasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtletasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
