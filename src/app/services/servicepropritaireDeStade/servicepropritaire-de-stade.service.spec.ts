import { TestBed } from '@angular/core/testing';

import { ServicepropritaireDeStadeService } from './servicepropritaire-de-stade.service';

describe('ServicepropritaireDeStadeService', () => {
  let service: ServicepropritaireDeStadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepropritaireDeStadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
