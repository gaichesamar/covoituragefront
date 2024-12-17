import { TestBed } from '@angular/core/testing';

import { PassagerService } from './passager.service';

describe('PassagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassagerService = TestBed.get(PassagerService);
    expect(service).toBeTruthy();
  });
});
