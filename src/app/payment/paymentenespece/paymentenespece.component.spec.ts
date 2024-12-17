import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentenespeceComponent } from './paymentenespece.component';

describe('PaymentenespeceComponent', () => {
  let component: PaymentenespeceComponent;
  let fixture: ComponentFixture<PaymentenespeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentenespeceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentenespeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
