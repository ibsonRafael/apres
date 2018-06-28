import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentoCompraComponent } from './investimento-compra.component';

describe('InvestimentoCompraComponent', () => {
  let component: InvestimentoCompraComponent;
  let fixture: ComponentFixture<InvestimentoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
