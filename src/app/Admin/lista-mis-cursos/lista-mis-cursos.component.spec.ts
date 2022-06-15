import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMisCursosComponent } from './lista-mis-cursos.component';

describe('ListaMisCursosComponent', () => {
  let component: ListaMisCursosComponent;
  let fixture: ComponentFixture<ListaMisCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMisCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMisCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
