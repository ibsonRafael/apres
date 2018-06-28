import { FundosModule } from './fundos.module';

describe('FundosModule', () => {
  let fundosModule: FundosModule;

  beforeEach(() => {
    fundosModule = new FundosModule();
  });

  it('should create an instance', () => {
    expect(fundosModule).toBeTruthy();
  });
});
