import { TestBed } from '@angular/core/testing';

import { BehaviorsService } from './behaviors.service';

describe('SettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehaviorsService = TestBed.get(BehaviorsService);
    expect(service).toBeTruthy();
  });
});
