import { TestBed } from '@angular/core/testing';

import { ASyncService } from './a-sync.service';

describe('ASyncService', () => {
  let service: ASyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ASyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
