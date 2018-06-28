import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoCompraComponent } from './acao-compra.component';

describe('AcaoCompraComponent', () => {
  let component: AcaoCompraComponent;
  let fixture: ComponentFixture<AcaoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
