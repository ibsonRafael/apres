import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroAcoesComponent } from './filtro-acoes.component';

describe('FiltroAcoesComponent', () => {
  let component: FiltroAcoesComponent;
  let fixture: ComponentFixture<FiltroAcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroAcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
