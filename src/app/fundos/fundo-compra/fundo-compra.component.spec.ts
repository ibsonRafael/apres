import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoCompraComponent } from './fundo-compra.component';

describe('FundoCompraComponent', () => {
  let component: FundoCompraComponent;
  let fixture: ComponentFixture<FundoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
