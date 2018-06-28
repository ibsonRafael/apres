import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundosListaComponent } from './fundos-lista.component';

describe('FundosListaComponent', () => {
  let component: FundosListaComponent;
  let fixture: ComponentFixture<FundosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
