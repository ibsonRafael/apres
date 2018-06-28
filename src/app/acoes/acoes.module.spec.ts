import { AcoesModule } from './acoes.module';

describe('AcoesModule', () => {
  let acoesModule: AcoesModule;

  beforeEach(() => {
    acoesModule = new AcoesModule();
  });

  it('should create an instance', () => {
    expect(acoesModule).toBeTruthy();
  });
});
