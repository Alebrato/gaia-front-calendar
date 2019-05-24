import { TestBed, inject } from '@angular/core/testing';

import { SociedadesService } from './sociedades.service';

describe('SociedadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SociedadesService]
    });
  });

  it('should be created', inject([SociedadesService], (service: SociedadesService) => {
    expect(service).toBeTruthy();
  }));
});
