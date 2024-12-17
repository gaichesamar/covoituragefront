import { TestBed } from '@angular/core/testing';

import { ResrvationService } from './resrvation.service';

describe('ResrvationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResrvationService = TestBed.get(ResrvationService);
    expect(service).toBeTruthy();
  });
});
