import { TestBed, inject } from '@angular/core/testing';

import { InvestimentoApiService } from './investimento-api.service';

describe('InvestimentoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestimentoApiService]
    });
  });

  it('should be created', inject([InvestimentoApiService], (service: InvestimentoApiService) => {
    expect(service).toBeTruthy();
  }));
});
