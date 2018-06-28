import { InvestimentosModule } from './investimentos.module';

describe('InvestimentosModule', () => {
  let investimentosModule: InvestimentosModule;

  beforeEach(() => {
    investimentosModule = new InvestimentosModule();
  });

  it('should create an instance', () => {
    expect(investimentosModule).toBeTruthy();
  });
});
