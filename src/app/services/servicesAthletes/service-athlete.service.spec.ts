import { TestBed } from '@angular/core/testing';

import { ServiceAthleteService } from './service-athlete.service';

describe('ServiceAthleteService', () => {
  let service: ServiceAthleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAthleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
