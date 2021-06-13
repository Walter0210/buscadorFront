import { TestBed } from '@angular/core/testing';

import { IndexarService } from './indexar.service';

describe('IndexarService', () => {
  let service: IndexarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
