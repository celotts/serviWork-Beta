import { TestBed } from '@angular/core/testing';

import { PaginationsService } from './paginations.service';

describe('PaginationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginationsService = TestBed.get(PaginationsService);
    expect(service).toBeTruthy();
  });
});
