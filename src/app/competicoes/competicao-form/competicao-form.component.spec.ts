import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeticaoFormComponent } from './competicao-form.component';

describe('CompeticaoFormComponent', () => {
  let component: CompeticaoFormComponent;
  let fixture: ComponentFixture<CompeticaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompeticaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompeticaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
