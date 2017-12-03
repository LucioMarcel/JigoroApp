import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudocasComponent } from './judocas.component';

describe('JudocasComponent', () => {
  let component: JudocasComponent;
  let fixture: ComponentFixture<JudocasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudocasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
