import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpassagerComponent } from './registerpassager.component';

describe('RegisterpassagerComponent', () => {
  let component: RegisterpassagerComponent;
  let fixture: ComponentFixture<RegisterpassagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterpassagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
