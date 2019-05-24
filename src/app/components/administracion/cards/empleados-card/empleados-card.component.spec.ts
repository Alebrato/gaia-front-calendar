import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCardComponent } from './empleados-card.component';

describe('EmpleadosCardComponent', () => {
  let component: EmpleadosCardComponent;
  let fixture: ComponentFixture<EmpleadosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
