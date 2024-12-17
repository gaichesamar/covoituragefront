import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterconducteurComponent } from './registerconducteur.component';

describe('RegisterconducteurComponent', () => {
  let component: RegisterconducteurComponent;
  let fixture: ComponentFixture<RegisterconducteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterconducteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterconducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
