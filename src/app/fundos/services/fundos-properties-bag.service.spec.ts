import { TestBed, inject } from '@angular/core/testing';

import { FundosPropertiesBagService } from './fundos-properties-bag.service';

describe('FundosPropertiesBagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundosPropertiesBagService]
    });
  });

  it('should be created', inject([FundosPropertiesBagService], (service: FundosPropertiesBagService) => {
    expect(service).toBeTruthy();
  }));
});
