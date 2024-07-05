import { TestBed } from '@angular/core/testing';

import { ServiceStadeService } from './service-stade.service';

describe('ServiceStadeService', () => {
  let service: ServiceStadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
