import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMisCursosComponent } from './form-mis-cursos.component';

describe('FormMisCursosComponent', () => {
  let component: FormMisCursosComponent;
  let fixture: ComponentFixture<FormMisCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMisCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMisCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
