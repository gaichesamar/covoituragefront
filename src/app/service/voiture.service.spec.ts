import { TestBed } from '@angular/core/testing';

import { VoitureService } from './voiture.service';

describe('VoitureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoitureService = TestBed.get(VoitureService);
    expect(service).toBeTruthy();
  });
});
