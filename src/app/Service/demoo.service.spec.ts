import { TestBed } from '@angular/core/testing';

import { DemooService } from './demoo.service';

describe('DemooService', () => {
  let service: DemooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
