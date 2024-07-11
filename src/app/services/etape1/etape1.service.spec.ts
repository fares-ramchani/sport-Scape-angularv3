import { TestBed } from '@angular/core/testing';

import { Etape1Service } from './etape1.service';

describe('Etape1Service', () => {
  let service: Etape1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Etape1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
