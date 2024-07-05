import { TestBed } from '@angular/core/testing';

import { ServiceActiviteService } from './service-activite.service';

describe('ServiceActiviteService', () => {
  let service: ServiceActiviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceActiviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
