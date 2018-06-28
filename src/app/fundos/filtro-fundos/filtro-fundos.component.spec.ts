import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroFundosComponent } from './filtro-fundos.component';

describe('FiltroFundosComponent', () => {
  let component: FiltroFundosComponent;
  let fixture: ComponentFixture<FiltroFundosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroFundosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroFundosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
