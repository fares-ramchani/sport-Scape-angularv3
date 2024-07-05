import { TestBed } from '@angular/core/testing';

import { SportEntrepriseService } from './sport-entreprise.service';

describe('SportEntrepriseService', () => {
  let service: SportEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
