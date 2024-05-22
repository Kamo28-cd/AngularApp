import { TestBed } from '@angular/core/testing';

import { CurrentPriceService } from './current-price.service';

describe('CurrentPriceService', () => {
  let service: CurrentPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
