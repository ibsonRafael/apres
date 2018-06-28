import { TestBed, async, inject } from '@angular/core/testing';

import { TemPerfilGuard } from './tem-perfil.guard';

describe('TemPerfilGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemPerfilGuard]
    });
  });

  it('should ...', inject([TemPerfilGuard], (guard: TemPerfilGuard) => {
    expect(guard).toBeTruthy();
  }));
});
