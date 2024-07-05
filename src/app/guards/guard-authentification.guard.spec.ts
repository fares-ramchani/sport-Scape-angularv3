import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardAuthentificationGuard } from './guard-authentification.guard';

describe('guardAuthentificationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardAuthentificationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
