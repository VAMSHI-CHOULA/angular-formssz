import { TestBed } from '@angular/core/testing';

import { FormusersService } from './formusers.service';

describe('FormusersService', () => {
  let service: FormusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
