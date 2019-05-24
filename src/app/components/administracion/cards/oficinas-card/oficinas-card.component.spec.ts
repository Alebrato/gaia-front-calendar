import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasCardComponent } from './oficinas-card.component';

describe('OficinasCardComponent', () => {
  let component: OficinasCardComponent;
  let fixture: ComponentFixture<OficinasCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinasCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
