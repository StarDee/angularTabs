import { TestBed } from '@angular/core/testing';

import { DealWithTabService } from './deal-with-tab.service';

describe('DealWithTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DealWithTabService = TestBed.get(DealWithTabService);
    expect(service).toBeTruthy();
  });
});
