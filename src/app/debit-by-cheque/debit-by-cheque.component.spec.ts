import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitByChequeComponent } from './debit-by-cheque.component';

describe('DebitByChequeComponent', () => {
  let component: DebitByChequeComponent;
  let fixture: ComponentFixture<DebitByChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitByChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitByChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
