import { TestBed, inject} from '@angular/core/testing';

import { OficinasService } from './oficinas.service';

describe('OficinasService', () => {
  beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [OficinasService]
  });
});

it('should be created', inject([OficinasService], (service: OficinasService) => {
  expect(service).toBeTruthy();
}));
});
