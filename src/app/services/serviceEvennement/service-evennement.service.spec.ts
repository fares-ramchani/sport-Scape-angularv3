import { TestBed } from '@angular/core/testing';

import { ServiceEvennementService } from './service-evennement.service';

describe('ServiceEvennementService', () => {
  let service: ServiceEvennementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEvennementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
