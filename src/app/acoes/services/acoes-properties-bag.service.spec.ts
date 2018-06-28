import { TestBed, inject } from '@angular/core/testing';

import { AcoesPropertiesBagService } from './acoes-properties-bag.service';

describe('AcoesPropertiesBagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcoesPropertiesBagService]
    });
  });

  it('should be created', inject([AcoesPropertiesBagService], (service: AcoesPropertiesBagService) => {
    expect(service).toBeTruthy();
  }));
});
