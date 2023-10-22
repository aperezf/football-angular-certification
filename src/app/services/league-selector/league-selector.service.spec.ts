import { TestBed } from '@angular/core/testing';

import { LeagueSelectorService } from './league-selector.service';

describe('LeagueSelectorService', () => {
  let service: LeagueSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
