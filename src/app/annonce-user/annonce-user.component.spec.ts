import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceUserComponent } from './annonce-user.component';

describe('AnnonceUserComponent', () => {
  let component: AnnonceUserComponent;
  let fixture: ComponentFixture<AnnonceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
