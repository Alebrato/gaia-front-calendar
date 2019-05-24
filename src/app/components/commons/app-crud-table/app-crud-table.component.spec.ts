import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCrudTableComponent } from './app-crud-table.component';

describe('AppCrudTableComponent', () => {
  let component: AppCrudTableComponent;
  let fixture: ComponentFixture<AppCrudTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCrudTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
