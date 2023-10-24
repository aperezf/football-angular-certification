import { TestBed } from '@angular/core/testing';

import { FootballApiKeyInterceptorService } from './football-api-key-interceptor.service';

describe('FootballApiKeyInterceptorService', () => {
  let service: FootballApiKeyInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballApiKeyInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
