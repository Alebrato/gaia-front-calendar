import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociedadesCardComponent } from './sociedades-card.component';

describe('SociedadesCardComponent', () => {
  let component: SociedadesCardComponent;
  let fixture: ComponentFixture<SociedadesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociedadesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociedadesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
