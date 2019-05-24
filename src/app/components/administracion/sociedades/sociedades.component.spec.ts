import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociedadesComponent } from './sociedades.component';

describe('SociedadesComponent', () => {
  let component: SociedadesComponent;
  let fixture: ComponentFixture<SociedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
