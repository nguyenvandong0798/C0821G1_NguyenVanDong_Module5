import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmerCreateComponent } from './custmer-create.component';

describe('CustmerCreateComponent', () => {
  let component: CustmerCreateComponent;
  let fixture: ComponentFixture<CustmerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustmerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
