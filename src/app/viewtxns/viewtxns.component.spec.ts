import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtxnsComponent } from './viewtxns.component';

describe('ViewtxnsComponent', () => {
  let component: ViewtxnsComponent;
  let fixture: ComponentFixture<ViewtxnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtxnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtxnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
