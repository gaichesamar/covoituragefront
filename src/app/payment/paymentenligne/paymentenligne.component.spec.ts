import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentenligneComponent } from './paymentenligne.component';

describe('PaymentenligneComponent', () => {
  let component: PaymentenligneComponent;
  let fixture: ComponentFixture<PaymentenligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentenligneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentenligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
