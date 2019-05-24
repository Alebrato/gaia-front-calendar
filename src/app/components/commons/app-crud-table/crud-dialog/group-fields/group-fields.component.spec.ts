import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFieldsComponent } from './group-fields.component';

describe('GroupFieldsComponent', () => {
  let component: GroupFieldsComponent;
  let fixture: ComponentFixture<GroupFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
