import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentoDetalhesComponent } from './investimento-detalhes.component';

describe('InvestimentoDetalhesComponent', () => {
  let component: InvestimentoDetalhesComponent;
  let fixture: ComponentFixture<InvestimentoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
