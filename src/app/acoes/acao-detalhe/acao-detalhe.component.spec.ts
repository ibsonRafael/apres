import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoDetalheComponent } from './acao-detalhe.component';

describe('AcaoDetalheComponent', () => {
  let component: AcaoDetalheComponent;
  let fixture: ComponentFixture<AcaoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
