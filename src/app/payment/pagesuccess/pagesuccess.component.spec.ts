import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesuccessComponent } from './pagesuccess.component';

describe('PagesuccessComponent', () => {
  let component: PagesuccessComponent;
  let fixture: ComponentFixture<PagesuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
